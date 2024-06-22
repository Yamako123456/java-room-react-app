import VideoTable from "./VideoTable"

function AdminPage({ tutorials, setTutorials }) {

    let maxId = tutorials.length;

    const addVideo = () => {
        console.log('I am in the addVideo function');
        const newVideo = {
            id: maxId + 1,
            title: "Java Tutorial for Beginners 2023" + (maxId + 1),
            name: "New Video" + (maxId + 1),
            url: "https://www.google.com/search?q=java%20tutorial%20site%3Ayoutube.com&sca_esv=4c1f4100c44949b9&rlz=1C1RXQR_enUS959US959&sxsrf=ADLYWIKKztL-nQSZZEh4GlwzEWlFUQOUmQ%3A1719024934950&ei=LT12ZumXOZPeur8PleaRoAQ&ved=2ahUKEwip4pj4mu6GAxUTr-4BHRVzBEQQ2wF6BAgJEAE&uact=5&oq=outube.com&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm91dHViZS5jb20yDRAAGIAEGLEDGIMBGAoyDRAAGIAEGLEDGIMBGAoyChAAGIAEGLEDGAoyChAAGIAEGLEDGAoyDRAAGIAEGLEDGIMBGAoyDRAAGIAEGLEDGIMBGAoyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyChAAGIAEGLEDGApIhhBQAFiQDnAAeAGQAQCYAVagAYoFqgECMTC4AQPIAQD4AQGYAgqgAqgFwgIPECMYgAQYJxiKBRhGGPkBwgIKECMYgAQYJxiKBcICBBAjGCfCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAAGIAEwgInEAAYgAQYigUYRhj5ARiXBRiMBRjdBBhGGPkBGPQDGPUDGPYD2AEBwgIQEC4YgAQY0QMYQxjHARiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgcQIxixAhgnwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICBhAAGAMYCpgDALoGBggBEAEYE5IHAjEwoAfYWw&sclient=gws-wiz-serp#",
            thumbnail: "https://yt3.googleusercontent.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s176-c-k-c0x00ffffff-no-rj",
            comment: "new video on Java",
        }
        //props.tutorials.push(newVideo);

        setTutorials(tutorials => [...tutorials, newVideo])
    }
    return (
        <div class="container">

            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>
                        Your Videos
                    </div>
                    <div className='card-body'>
                        hello world! This is admin page.

                        <VideoTable tutorials={tutorials} />
                        <button className="btn btn-primary" onClick={addVideo}>
                            Add New Video
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage