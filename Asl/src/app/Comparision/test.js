import React, { useState } from "react";
import Home from "../page";
import ReactPlayer from "react-player";


function ImageUploader({ onUpload }) {
  const [imageFile, setImageFile] = useState(null);
  const[output, setoutput]=useState(null);
  const[loading,setloading]=useState(false);
  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleUpload = async() => {
    setloading(true)
    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch("http://127.0.0.1:5000/detect", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Optionally, you can handle the response data here
        console.log("Upload successful:", data);
        // onUpload(); // Optional callback to handle upload success
        function getFilenameFromPath(path) {
          const regex = /[^\\\/]*$/;
          return path.match(regex)[0];
        }
        
        const filename = getFilenameFromPath(data);
        console.log(filename);
        setloading(false)
        setoutput(filename)
      })


      // .then((data)=>
      // {
      //   console.log("Upload successful:", data);
       
      // })
     
      .catch((error) => {
        console.error("Error uploading file:", error);
      });

  };

  function effect(data) {
    return (
      <div>  console.log("Hellloooooooooo",data)
      <Image url={data} width={640} height={640}/></div>
        
    );
}


  return (
    <div>
      <input type="file" accept="video/*, image/*" onChange={handleFileChange} />
      {!output && <button onClick={handleUpload} >{loading  ? <p>Loading.....</p>: <p>Upload</p>}</button>}
      
      {/* {output && 
      <video width="320" height="320">
       <source src={"http://127.0.0.1:5500/yolov7/"+ output}>
       </source>
      </video>} */}
      {/* <video width="320" height="320" controls>
       <source src={"http://127.0.0.1:5500/yolov7/runs/detect/exp/Hope.mp4"} type="video/webm">
       </source>
      </video>
       */}
    
     {/* <a href={"http://127.0.0.1:5500/yolov7/"+ output} target="_blank" download>
     Play Video
      </a> */}


<div>
  { output && <a href={"/exp/"+ output} download>
    Download Ouptput
      </a>}
</div>

      
 </div>
    
  );

 
}

export default ImageUploader;
