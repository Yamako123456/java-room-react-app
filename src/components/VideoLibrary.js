function VideoLibrary(props) {
    
    function handleClick(vidUrl, vidTitle, vidComment) {
        props.setUrl(vidUrl)
        props.setVideoTitle(vidTitle)
        props.setComment(vidComment)
        
        const videoPlayerElement = document.getElementById('player-container');
        if (videoPlayerElement) {
            videoPlayerElement.scrollIntoView({ behavior: 'smooth'});
        }
        // setFocusPlayer(true)
    }

    return (
        // <div className="row tm-mb-90 tm-gallery ml-2 mr-2 mt-5">
        <div>
            {/* <div class="row tm-mb-90"> */}
            <div class="row tm-mb-90">
                <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                    <p class="tagline">Click to select video!</p>
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

export default VideoLibrary