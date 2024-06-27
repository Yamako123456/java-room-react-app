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
             <VideoTable tutorials={tutorials} />
         
            <br/>
            <div className='card'>
                <div className='card-header'>
                    <h1>Add Video</h1>
                    <p>All fields required.</p>
                </div>

                <div className='card-body'>
                    <AddNewVideoSection addVideo={addVideo} />
                </div>
            </div><br/>
            <div className='card'>
                <div className='card-header'>
                    <h1>Test New Video Tile</h1>
                </div>

                <div className='card-body'>
                    <VideoSection tutorials={tutorials} />
                </div>
            </div>
        </div>
    )
}

export default AdminPage