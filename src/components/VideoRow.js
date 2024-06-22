function VideoRow(props) {
    return (
        <tr>
            {/* <th scope="row"> {props.vidId} </th> */}
            {/* <td> {props.vidName}</td> */}
            <td> {props.vidTitle}</td>
            <td> {props.vidUrl}</td>
            <td> {props.vidThumbnailUrl}</td>
        </tr>
    )
}

export default VideoRow