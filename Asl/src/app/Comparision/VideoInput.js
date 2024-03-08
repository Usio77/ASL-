import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
// import exp from 'D:\Minor_Project\Prabhas\Sign-Language-Detection\yolov7\runs'

export default function VideoInput(props) {

  const [videoFile, setVideoFile] = useState(null);
  const [signLanguageDetected, setSignLanguageDetected] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);
    console.log(formData, "hello");
  
    try {
      const response = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setSignLanguageDetected(data.path);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }
  






  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    console.log(inputRef); 

    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4,.jpg"
      />
      {/* {!source && <button onClick={handleChoose}>Choose</button>} */}
      {source && (
        <>
        <img
          className=" bg-[#7366C0] rounded-lg"
          width="60%"
          height={height}
          controls
          src={source}
        />
        <div>
            <button className=" w-40 h-10 pr-4 pl-4 mt-3 rounded-lg bg-[#7366C0] text-[#D8D8D8] hover:bg-[#5d5494] duration-700" onClick={handleUpload}>Convert</button>
          </div>
        </>
      )}
      
      <div className="VideoInput_footer"></div>
    </div>
  );
}