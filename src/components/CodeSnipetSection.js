import JDoodleEmbed from "./JDoodleEmbed"

function CodeSnipetSection(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h1>Compile Code In JDoodle</h1>    
                    <p>
                     Write your code directly or copy and paset the following code into JDoodle Editor to compile!
                    </p>
                </div>
                <div className='card-body'>
                    <pre>{props.comment}</pre>
                </div>
            </div>
 
            <JDoodleEmbed />
        </div>
    )
}

export default CodeSnipetSection