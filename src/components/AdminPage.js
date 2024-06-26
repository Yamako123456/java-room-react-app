import { useState } from "react";
import VideoTable from "./VideoTable"
import AddNewVideoSection from "./AddNewVideoSection";

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
            <div className='card'>
                <div className='card-header'>
                    <h1>Currently contained video list</h1>
                </div>
                <div className='card-body'>

                    <VideoTable tutorials={tutorials} />
                    <AddNewVideoSection addVideo={addVideo} />

                </div>
            </div>
        </div>
    )
}

export default AdminPage