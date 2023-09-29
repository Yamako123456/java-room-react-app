import React from "react";

function TutorialItem(props) {
    function updatePlayer(e) {

        const url = 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4'
        const name = ''
        const video = document.getElementById('player');
        const source = document.getElementById('video-source');
        video.pause()
        source.setAttribute('src', url)
        video.load();
        video.play();
    }
    return (
        // using bootstrap col xl is extra large, lg is large and medium, small based on browser size it's set differently width of the column. 
        // mb is margin bottom
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tiles">
                <img id={props.id} src={props.thumbnail} alt={props.title + ' image'} />
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>{props.title}</h2>
                    <a href="#player" onClick={updatePlayer} />

                </figcaption>
            </figure>
        </div>
    )
}

export default TutorialItem;