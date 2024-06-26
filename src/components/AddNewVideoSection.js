import React, { useState } from 'react'

function AddNewVideoSection(props) {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [comment, setComment] = useState('');

    const submitVideo = () => {
        if (title !== '' && url !== '' && thumbnail !== '' && comment !== '') {
            props.addVideo(title, url, thumbnail, comment);
            setTitle('');
            setUrl('');
            setThumbnail('');
            setComment('');
        }
    };

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label" >Video Title</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={e => setTitle(e.target.value)}
                    ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" >Video URL</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={e => setUrl(e.target.value)}
                    ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" >Thumbnail URL</label>
                    <input
                        type="text"
                        className="form-control"
                        rows={30}
                        required
                        onChange={e => setThumbnail(e.target.value)}
                    ></input>
                </div>


                <div className="mb-3">
                    <label className="form-label" >Java code that user can run in JDoodle compiler such as a entry-point class with the main method.</label>
                    <textarea
                        type="text"
                        className="form-control"
                        rows={30}
                        required
                        onChange={e => setComment(e.target.value)}
                    ></textarea>
                </div>

                <br />
                <button
                    type='button'
                    className="btn btn-primary"
                    onClick={submitVideo}>
                    Add Video
                </button>
            </form>
        </div>
    )
}

export default AddNewVideoSection