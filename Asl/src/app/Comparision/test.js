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
    <div className=" pl-32">
      <input type="file" accept="video/*, image/*" onChange={handleFileChange}/>
      {!output && <button onClick={handleUpload} >{loading  ?
      <div className=" transition-opacity ">
      <div className=" flex flex-row animate-pulse w-60 h-12 pl-4 pt-1 bg-[#7366C0] rounded-xl"><div
    class="inline-block h-6 w-6 mt-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"></div><div className="pt-2 grow "><span className="-pl-3 mb-20 font-bold">Preparing Output </span></div></div>

    {/* <div className=" p-11 w-80 ease-in-out">It might take a while</div> */}
      </div>



  : <div className=" text-xl font-medium bg-[#7366C0] w-32 h-10 rounded-xl -pl-32"><p className="  pt-1">Upload</p></div>}</button>}
      
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
      {/* <div className=" ml-[150px] mt-[45px] pl-11 pt-4 bg-[#7366C0] w-56 h-16 rounded-xl content-center items-center font-bold " >
    <a >
    Download Ouptput
      </a>
</div> */}



<div >
  { output &&<div className="ml-[150px] mt-[45px] pl-11 pt-4 bg-[#7366C0] w-56 h-16 rounded-xl content-center items-center font-bold "><a href={"/exp/"+ output} download>
    Download Ouptput
      </a></div>}
</div>   
</div>
    
  );

 
}

export default ImageUploader;
