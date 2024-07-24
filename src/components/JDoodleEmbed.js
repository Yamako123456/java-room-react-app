import React, { useEffect } from 'react';

const JDoodleEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div>

            <h1>JDoodle Embedded Compiler</h1>
            <div 
                data-pym-src="https://www.jdoodle.com/embed/v1/6ba97fd66069ade7" 
                style={{ width: '100%', height: '1000px', border: '1px solid #ddd' }}
                >
                </div>
        </div>
    
    );
};

export default JDoodleEmbed;
