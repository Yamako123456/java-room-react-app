import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'
import EditorSection from "./EditorSection";
import VideoPlayer from "./VideoPlayer";

function VideoSection(props) {
  
   
    const INITIAL_URL = 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4'
    const TEST_URL = 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4'
    const INITIAL_NAME = 'Array To String'
    const INITIAL_COMMENT =

        'public class ArrayToString {' + '\n' +
        '\t' + 'public static void main(String[] args) {' + '\n' +
        '\t\t' + 'String[] sArray = { "Hello", " ", "world!"};' + '\n' +
        '\t\t' + 'System.out.println(sArray);' + '\n' +
        '\t\t' + 'int[] intArray = { 1, 2, 3, 4, 6};' + '\n' +
        '\t\t' + 'System.out.println(intArray);' + '\n' +
        '\t\t' + 'char[] chArray = { \'H\', \'e\', \'l\', \'l\', \'o\'};' + '\n' +
        '\t\t' + 'System.out.println(chArray);' + '\n' +
        '\t\t' + 'Character[] chArray2 = { \'w\', \'o\', \'r\', \'l\', \'d\', \'!\'};' + '\n' +
        '\t\t' + 'System.out.println(chArray2);' + '\n' +
        '\t' + '}' + '\n' +
        '}' + '\n';

    const [videoTitle, setVideoTitle] = useState(INITIAL_NAME);
    const [aUrl, setUrl] = useState(() => INITIAL_URL)
    const [comment, setComment] = useState(() => INITIAL_COMMENT);
    const [focusPlayer, setFocusPlayer] = useState(false)

    function handleClick(vidUrl, vidTitle, vidComment) {
        setUrl(vidUrl)
        setVideoTitle(vidTitle)
        setComment(vidComment)
        
        const videoPlayerElement = document.getElementById('player-container');
        if (videoPlayerElement) {
            videoPlayerElement.scrollIntoView({ behavior: 'smooth'});
        }
        // setFocusPlayer(true)
    }
  
    return (
        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>{videoTitle}</h1>
                </div>
                <div id ='player-container' className='card-body'>
                        <VideoPlayer 
                            vidUrl={aUrl} 
                            vidTitle={videoTitle}
                        />
                </div>
                <div className='card-body'>
                    <p>
                        Once you done watching the video, try it out in the built-in compiler! Copy and paste the following code to editor at the end of this page and click Execute!
                    </p>
                    <hr />
                    <pre>{comment}</pre>
                </div>

            </div>
            <br />
            <div class="row tm-mb-90">
                <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <p class="tagline">Click to play video!</p>
                </div>
            </div>
            <div class="row tm-mb-90 tm-gallery  ml-2 mr-2">
                {
                    props.tutorials.map((a) => (
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                            <figure class="effect-ming tiles">
                                <img src={process.env.PUBLIC_URL + a.thumbnail} alt={a.title + ' image'} />
                                <figcaption class="d-flex align-items-center justify-content-center">
                                    <h2>{a.title}</h2>
                                    <a onClick={() => handleClick(a.url, a.title, a.comment)} />
                                </figcaption>
                            </figure>
                        </div>))
                }
            </div>
        </div>
    )
}

export default VideoSection