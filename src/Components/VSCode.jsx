import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import {AiOutlineClose} from 'react-icons/ai';
import {BsFiletypeHtml} from 'react-icons/bs';


const VSCode = () => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #1a1a1a;
            color: #fff;
        }
        .stack-section {
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 8px;
            background: rgba(255,255,255,0.1);
        }
        .stack-section h2 {
            color: #00C1A1;
            margin-top: 0;
        }
        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tech-item {
            background: #007070;
            color: white;
            padding: 4px 12px;
            border-radius: 5px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="stack-section">
        <h2>Languages</h2>
        <div class="tech-list">
            <span class="tech-item">Python</span>
            <span class="tech-item">JavaScript</span>
            <span class="tech-item">HTML/CSS</span>
            <span class="tech-item">Java</span>
            <span class="tech-item">TypeScript</span>
        </div>
    </div>

    <div class="stack-section">
        <h2>Frontend</h2>
        <div class="tech-list">
            <span class="tech-item">React.js</span>
            <span class="tech-item">Next.js</span>
            <span class="tech-item">TailwindCSS</span>
        </div>
    </div>
    <div class="stack-section">
        <h2>Backend</h2>
        <div class="tech-list">
            <span class="tech-item">Django</span>
            <span class="tech-item">Node.js</span>
            <span class="tech-item">PostgreSQL</span>
            <span class="tech-item">MongoDB</span>
        </div>
    </div>
    <div class="stack-section">
        <h2>Tools</h2>
        <div class="tech-list">
            <span class="tech-item">Git</span>
            <span class="tech-item">Docker</span>
            <span class="tech-item">AWS</span>
            <span class="tech-item">Linux</span>
            <span class="tech-item">Apache</span>
        </div>
    </div>
</body>
</html>`;

  const [editorContent, setEditorContent] = useState(htmlContent);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleRun = () => {
    setIsPreviewOpen(true);
  };

  return (
    <div className="h-full flex flex-col bg-[#1E1E1E]">
      {/* Tab Bar with Run Button */}
      <div className="flex justify-between bg-[#252526] px-2">
        <div className="px-3 py-2 text-sm flex items-center gap-2 bg-[#1E1E1E] text-white">
        <BsFiletypeHtml className='h-5 w-5' />
          techstack.html
        </div>
        <button
          onClick={handleRun}
          className="px-4 py-1 my-1 flex items-center gap-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          <span className="text-sm">Open in Chrome</span>
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="html"
          value={editorContent}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: 'on',
            readOnly: false,
          }}
        />
      </div>

      {/* Chrome Window */}
      {isPreviewOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-white shadow-2xl overflow-hidden z-50">
          {/* Chrome Header */}
          <div className="bg-[#2D2D2D] h-8 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/images/chrome.png" alt="Chrome" className="w-11 h-8" />
              <span className="text-white text-xs">Chrome</span>
            </div>
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="text-white hover:bg-red-500 px-3 py-1"
            >
              <AiOutlineClose/>
            </button>
          </div>
          
          {/* Chrome Content */}
          <iframe
            srcDoc={editorContent}
            title="preview"
            className="w-full h-[calc(100%-32px)] bg-[#1a1a1a]"
            sandbox="allow-scripts"
          />
        </div>
      )}
    </div>
  );
};

export default VSCode;

