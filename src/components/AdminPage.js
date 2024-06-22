import VideoTable from "./VideoTable"
function AdminPage(props) {
    return (
        <div class="container">

            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>
                        Your Videos
                    </div>
                    <div className='card-body'>
                        hello world! This is admin page.

                        <VideoTable tutorials={props.tutorials} />

                        {/* <button className='btn btn-primary' onClick={addTodo}>
                            Add new todo
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage