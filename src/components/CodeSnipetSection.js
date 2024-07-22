import React, { useEffect } from 'react';

const JDoodleEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
    script.async = true;
    script.onload = () => {
      // Wait for pym to be fully initialized
      setTimeout(() => {
        const code = "xyz";
        const iframe = document.querySelector('iframe');
        if (iframe && window.pym && window.pym.autoInitInstances.length > 0) {
          window.pym.autoInitInstances[0].sendMessage('setCode', code);
        }
      }, 1000);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const setCode = () => {
    const code = document.getElementById('code').value;
    const iframe = document.querySelector('iframe');
    if (iframe && window.pym && window.pym.autoInitInstances.length > 0) {
      window.pym.autoInitInstances[0].sendMessage('setCode', code);
    }
  };

  return (
    <div>
      <textarea id="code" rows="10" cols="50"></textarea>
      <button onClick={setCode}>Set Code</button>
      <div data-pym-src="https://www.jdoodle.com/embed/v1/b55a08f970c646bd"></div>
    </div>
  );
};

export default JDoodleEmbed;






// import JDoodleEmbed from "./JDoodleEmbed"

// function CodeSnipetSection(props) {
//     return (
//         <div>
//             <div className="card">
//                 <div className="card-header">
//                     <h1>Compile {props.title} Code In JDoodle</h1>    
//                     <p>
//                      Write your code directly or copy and paset the following code into JDoodle Editor to compile!
//                     </p>
//                 </div>
//                 <div className='card-body'>
//                     <pre id='code' value='hello world, Marika'> {props.comment} </pre>
//                 </div>
//             </div>
 
//             <div data-pym-src="https://www.jdoodle.com/embed/v1/b55a08f970c646bd"></div>
//             <input id="code" type="text" value="xyz"/>
//             <button onclick="setCode()">Set Code</button>

//             <iframe
//                 title="JDoodle"
//                 src="https://www.jdoodle.com/embed/v1/b55a08f970c646bd"
//                 // "https://www.jdoodle.com/iembed/v0/gwi"
//                 width="100%"
//                 height="1100"
//                 frameBorder="0"
//                 allowFullScreen
//             ></iframe> 

//             {/* <JDoodleEmbed /> */}
//         </div>
//     )
// }

// export default CodeSnipetSection