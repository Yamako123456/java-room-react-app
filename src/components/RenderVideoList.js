import React, { useState } from "react";


function RenderVideoList({ tutorials }, { aUrl, setUrl }) {


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
        <div class="row tm-mb-90 tm-gallery  ml-2 mr-2">
            {
                tutorials.map((a) => (
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
    );
}

export default RenderVideoList;