import VideoRow from "./VideoRow"

function VideoTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Video ID</th>
                    <th scope="col">Video Name</th>
                    <th scope="col">Video Url</th>
                    <th scope="col">Thumbnail Url</th>
                </tr>
            </thead>
            <tbody>
                {props.tutorials.map(elem => (
                    <VideoRow
                        vidId={elem.id}
                        vidName={elem.name}
                        vidUrl={elem.url}
                        vidThumbnailUrl={elem.thumbnail}
                    />
                )

                )}
            </tbody>
        </table>
    )

}

export default VideoTable