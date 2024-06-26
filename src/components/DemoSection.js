import { useState } from "react";
import VideoTable from "./VideoTable"

function DemoSection({ tutorials, setTutorials }) {

    const [selectedVideo, setSelectedVideo] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    const [selectedCaption, setSelectedCaption] = useState('Big Buck Bunny');
    let maxId = tutorials.length;

    const addVideo = () => {
        const newVideo = {
            id: maxId + 1,
            title: selectedCaption,
            name: selectedCaption,
            url: selectedVideo,
            thumbnail: "/img/sample3.jpg",
            comment: "",
        }
        //props.tutorials.push(newVideo);

        setTutorials(tutorials => [...tutorials, newVideo])
    }

    const videoSelected = (event) => {
        // alert(event.target.options[event.target.selectedIndex].text);

        setSelectedVideo(event.target.value);
        setSelectedCaption(event.target.options[event.target.selectedIndex].text);
    }
    const resetVideoList = () => {

        window.location.reload()
    }

    return (

        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Demo - Let's add new video!</h1>
                </div>
                <div className='card-body'>

                    {/* <VideoTable tutorials={tutorials} /> */}

                    <div className="mt-5">
                        <form>
                            <div className="mb-3">
                                <label className="form-label" for="videos">Click the list below and choose a sample video to add:</label>
                                <select id="videos" name="videos" className="form-control" onChange={videoSelected} >
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">Big Buck Bunny</option>
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4">For Bigger Blazes</option>
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">Elephant Dream</option>
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4">For Bigger Joyrides</option>
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4">Sintel</option>
                                    <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4">Tears of Steel</option>
                                </select>
                            </div>
                            <br />
                            <button type='button' className="btn btn-primary" onClick={addVideo}>
                                Add Video
                            </button>
                        </form>

                        <div className="mt-5">
                            <div className="mb3">
                                <button type='button' className="btn btn-primary" onClick={resetVideoList}>
                                    Clear Added Videos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoSection