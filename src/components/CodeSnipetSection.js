import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodeSnippetSection = (props) => {
  const [code, setCode] = useState(props.comment);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  const apiUrl = 'https://api.jdoodle.com/v1/execute';

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
      <button onClick={compileCode} className='btn btn-primary' disabled={loading}>
        {loading ? 'Compiling...' : 'Compile Code'}
      </button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeSnippetSection;
