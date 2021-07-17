import React, { useState,useCallback } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import {useDropzone} from 'react-dropzone'
const FileInput = () => {
  const [video, setVideo] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [fileName, setFileName] = useState('');


  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
      const file = acceptedFiles[0]
      const reader = new FileReader()

      const formData = new FormData();

      setFileName(file['name'])

      formData.append('file', file);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      axios.post('http://localhost:5000/api/upload_video', formData, config);
      console.log(video,videoURL)


      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



  const getVideo = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    const formData = new FormData();

    setFileName(file['name'])

    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post('http://localhost:5000/api/upload_video', formData, config);
    console.log(video,videoURL)
    reader.onloadend = () => {
      setVideo(file);
      setVideoURL(reader.result);

      console.log(file);
      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // const isVideo = (filename) => {
  //   var ext = getExtension(filename);
  //   switch (ext.toLowerCase()) {
  //     case 'm4v':
  //     case 'avi':
  //     case 'mp4':
  //     case 'mov':
  //     case 'mpg':
  //     case 'mpeg':
  //       return true;
  //   }
  //   return false;
  // };

  // const getExtension = (filename) => {
  //   var parts = filename.split('.');
  //   return parts[parts.length - 1];
  // };

  return (
    <Layout>
      <div className="flex justify-center items-center">
          <div id="dropContainer" {...getRootProps()} className="w-1/2 py-60 border-2 rounded border-dashed border-blue-500 flex justify-center items-center">
            {fileName === '' ? <div className="flex flex-col items-center">
              <div>Drag and drop file</div>
              <div>or</div>
              <div className="w-full justify-center py-2  px-3 flex items-center space-x-3 rounded border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white"> Upload File</div>
            </div> : fileName }
            <input
            {...getInputProps()}
              className="hidden"
              // type="file"
              // onChange={(e)=>getVideo(e)}
            />
          </div>
      </div>
    </Layout>
  );
};


export default FileInput;
