import React from "react";

import loadVideo from "./loadVideo";

function TutorialItem(props) {
    return (
        // using bootstrap col xl is extra large, lg is large and medium, small based on browser size it's set differently width of the column. 
        // mb is margin bottom
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tiles">
                <img id={props.title} src={props.thumbnail} alt={props.title + ' image'} />
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>{props.title}</h2>
                    <a href="javascript:void(0);" onClick={() => loadVideo(props.url)} />

                </figcaption>
            </figure>
        </div>
    )
}

export default TutorialItem;