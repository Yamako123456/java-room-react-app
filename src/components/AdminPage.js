import { useState } from "react";
import VideoTable from "./VideoTable"
import AddNewVideoSection from "./AddNewVideoSection";
import VideoSection from "./VideoSection";

function AdminPage({ tutorials, setTutorials }) {

    let maxId = tutorials.length;

    const addVideo = (title, url, thumbail, comment) => {
        const newVideo = {
            id: maxId + 1,
            title: title,
            name: title,
            url: url,
            thumbnail: thumbail,
            comment: comment,
        }

        setTutorials(tutorials => [...tutorials, newVideo])
    }

    return (

        <div className='mt-5 container'>
            <h1 class='tagline'>ADMIN PAGE</h1>        
            <div className='card'>
                <div className='card-header'>
                    <h1>Currently contained video list</h1>
                </div>
                <div className='card-body'>

                    <VideoTable tutorials={tutorials} />
                
                </div>   
            </div> 
            <br/>
            <div className='card'>
                <p class="tagline">
                    Add Video                        
                </p>
                <AddNewVideoSection addVideo={addVideo} />
            </div><br/>
            <div className='card'>
                <p class="tagline">
                    Preview below                        
                </p>
                    <VideoSection tutorials={tutorials} />
            </div>
        </div>
    )
}

export default AdminPage