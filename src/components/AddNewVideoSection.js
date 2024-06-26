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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" >Video URL ( try https://youtu.be/0AzTcaZAkF0?si=P2Q1YsgSXF33Ctbj  )</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" >Thumbnail URL ( try /img/sampleThumbnail1.jpg )</label>
                    <input
                        type="text"
                        className="form-control"
                        rows={30}
                        required
                        value={thumbnail}
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
                        value={comment}
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