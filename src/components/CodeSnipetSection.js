import React, { useState } from 'react';
import axios from 'axios';

const CodeSnippetSection = () => {
  const [code, setCode] = useState('public class MyHelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  const apiUrl = 'https://api.jdoodle.com/v1/execute';

  const compileCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(proxyUrl + apiUrl, {
        clientId: '10d9939a265742d942b10f18f3ad8413',
        clientSecret: 'bacefb77dd1f47d216823c336f28c50c46a33acf447d7b858dae32c70d7a5d57',
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
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Java code here"
        rows="10"
        cols="50"
      />
      <button onClick={compileCode} disabled={loading}>
        {loading ? 'Compiling...' : 'Compile Code'}
      </button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeSnippetSection;
