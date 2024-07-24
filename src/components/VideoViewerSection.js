import VideoPlayer from "./VideoPlayer";

function VideoViewerSection(props) {

    return (

        <div className='card'>
                <div className='card-header'>
                    <h1>{props.videoTitle}</h1>
                </div>
                <div id ='player-container' className='card-body'>
                        <VideoPlayer 
                            vidUrl={props.aUrl} 
                            vidTitle={props.videoTitle}
                            />
                </div>
            </div>

    )
}
export default VideoViewerSection