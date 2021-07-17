import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const FileInput = () => {
  const [video, setVideo] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [fileName, setFileName] = useState('');

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
      <div>

          <label id="dropContainer" className="p-96 border-blue-500" htmlFor="video-upload">
            {fileName === '' ? 'Upload File' : fileName }
            <input
              className="hidden"
              id="video-upload"
              type="file"
              onChange={getVideo}
            />
          </label>
      </div>
    </Layout>
  );
};


export default FileInput;
