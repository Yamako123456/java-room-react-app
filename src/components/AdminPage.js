import VideoTable from "./VideoTable"

function AdminPage({ tutorials, setTutorials }) {

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
    let selectedVideo = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    let selectedCaption = 'Big Buck Bunny';

    const videoSelected = (event) => {
        alert(event.target.options[event.target.selectedIndex].text);

        selectedVideo = event.target.value;
        selectedCaption = event.target.options[event.target.selectedIndex].text;
    }

    return (
        <div class="container">

            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>
                        Demo For Add New Videos
                    </div>
                    <div className='card-body'>

                        <VideoTable tutorials={tutorials} />

                        <button className="btn btn-primary" onClick={addVideo}>
                            Add Video (Demo)
                        </button>

                        <label for="videos">Choose a video to add:</label>
                        <select id="videos" name="videos" onChange={videoSelected} >
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">Big Buck Bunny</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4">For Bigger Blazes</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">Elephant Dream</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4">For Bigger Joyrides</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4">Sintel</option>
                            <option value="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4">Tears of Steel</option>

                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage