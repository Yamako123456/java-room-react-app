import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'

function VideoSection(props) {
    const INITIAL_URL = 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4'
    const TEST_URL = 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4'
    const INITIAL_NAME = 'Array To String'

    const [name, setName] = useState(() => INITIAL_NAME)
    const [aUrl, setUrl] = useState(() => INITIAL_URL)

    function resetPlayer() {
        const name = ''
        const video = document.getElementById('player');
        const source = document.getElementById('video-source');
        video.pause()
        source.setAttribute('src', aUrl)
        video.load();
        video.play();
    }


    function handleClick(vidUrl) {

        setUrl(vidUrl)
        resetPlayer()
    }

    return (
        <div>

            <section class="row video-container" >
                <video class="col-12" id="player" autoplay controls >
                    <source id='video-source' src={aUrl} type="video/mp4" />
                </video>
            </section>

            <div class="row tm-mb-90 tm-gallery  ml-2 mr-2">
                {
                    props.tutorials.map((a) => (
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                            <figure class="effect-ming tiles">
                                <img src={process.env.PUBLIC_URL + a.thumbnail} alt={a.title + ' image'} />
                                <figcaption class="d-flex align-items-center justify-content-center">
                                    <h2>{a.title}</h2>
                                    <a href="#player" onClick={() => handleClick(a.url)} />
                                </figcaption>
                            </figure>
                        </div>))
                }
            </div>


            <div class="row tm-mb-90">
                <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                </div>
            </div>

        </div>
    )
}

export default VideoSection