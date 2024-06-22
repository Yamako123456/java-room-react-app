import VideoTable from "./VideoTable"

function AdminPage({ tutorials, setTutorials }) {

    let maxId = tutorials.length;

    const addVideo = () => {
        const newVideo = {
            id: maxId + 1,
            title: "Java Tutorial for Beginners 2023" + (maxId + 1),
            name: "New Video" + (maxId + 1),
            url: selectedVideo,
            thumbnail: process.env.PUBLIC_URL + "/img/sample3.jpg",
            comment: "new video on Java",
        }
        //props.tutorials.push(newVideo);

        setTutorials(tutorials => [...tutorials, newVideo])
    }
    let selectedVideo = '';

    const videoSelected = (event) => {
        selectedVideo = event.target.value;
    }

    return (
        <div class="container">

            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>
                        Your Videos
                    </div>
                    <div className='card-body'>

                        <VideoTable tutorials={tutorials} />

                        <button className="btn btn-primary" onClick={addVideo}>
                            Add New Video
                        </button>

                        <label for="videos">Choose a video to add:</label>
                        <select id="videos" name="videos" onChange={videoSelected} >
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">Big Buck Bunn</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4">For Bigger Blazes</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">"Elephant Dream</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4">"For Bigger Joyrides"</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4">"Sintel"</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4">"Tears of Steel"</option>

                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage