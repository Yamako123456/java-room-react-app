import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'
import EditorSection from "./EditorSection";
// import VideoPlayer from "./VideoPlayer";
import CodeSnipetSection from "./CodeSnipetSection";
import VideoViewerSection from "./VideoViewerSection";
import VideoLibrary from "./VideoLibrary"

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

    
  
    return (
        <div className='mt-5 container'>
            <VideoViewerSection videoTitle={videoTitle} aUrl={aUrl}/>
            

            <CodeSnipetSection title={videoTitle} comment={comment}/>

            <br />

            <VideoLibrary 
                tutorials={props.tutorials} 
                aUrl={aUrl}
                setUrl={setUrl}
                videoTitle={videoTitle}
                setVideoTitle={setVideoTitle}
                comment={comment}
                setComment={setComment}
            />
        
        </div>
    )
}

export default VideoSection