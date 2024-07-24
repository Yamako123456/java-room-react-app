import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JDoodleEmbed from './JDoodleEmbed';
import VideoViewerSection from './VideoViewerSection'

const CodeSnippetSection = (props) => {
  const [code, setCode] = useState(props.comment);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  const apiUrl = 'https://api.jdoodle.com/v1/execute';

  const [showEmbed, setShowEmbed] = useState(false);

  // Update code state when props.comment changes
  useEffect(() => {
    setCode(props.comment);
  }, [props.comment]);

  const compileCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(proxyUrl + apiUrl, {
        clientId: '10d9939a265742d942b10f18f3ad8413',
        clientSecret: '89a94bb66b10e55b2b4aa1680353d349ba0dfe51da467f05739de2be5d37e64d',
        script: code,
        stdin: '',
        language: 'java',
        versionIndex: '3',
        compileOnly: false
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setOutput(response.data.output || 'No output returned');
    } catch (error) {
      console.error('Error executing code:', error.response ? error.response.data : error.message);
      setOutput(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  const compileCodeByEmbed = () => {
    setShowEmbed(!showEmbed);
  }
  return (
    <div className='card mt-3'>
      <h1 className='card-body'>
        Code Snippet for {props.title}
      </h1>
      <textarea
        className='card-body form-control'
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Java code here"
        rows="25"
      />
      <button onClick={compileCodeByEmbed} className='btn btn-primary' disabled={loading}>
        {loading ? 'Compiling...' : showEmbed ? 'Close Copiler Window' : 'Compile Code'}
      </button>
      <pre>{output}</pre>

      {showEmbed && (

        <JDoodleEmbed />
      
      )}
    </div>
  );
};

export default CodeSnippetSection;
