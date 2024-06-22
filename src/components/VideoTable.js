import VideoRow from "./VideoRow"

function VideoTable({ tutorials }) {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    {/* <th scope="col">Video ID</th> */}
                    <th scope="col">Video Title</th>
                    <th scope="col">Video Url</th>
                    <th scope="col">Thumbnail Url</th>
                </tr>
            </thead>
            <tbody>
                {tutorials.map(elem => (
                    <VideoRow
                        // vidId={elem.id}
                        vidTitle={elem.title}
                        vidUrl={elem.url}
                        vidThumbnailUrl={elem.thumbnail}
                    />
                ))}
            </tbody>
        </table>
    )

}

export default VideoTable