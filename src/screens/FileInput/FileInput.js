import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const FileInput = () => {
  const [video, setVideo] = useState('');
  const [videoURL, setVideoURL] = useState('');

  const getVideo = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post('http://localhost:5000/api/upload_video', formData, config);

    reader.onloadend = () => {
      setVideo(file);
      setVideoURL(reader.result);

      console.log(file);
      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const isVideo = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'm4v':
      case 'avi':
      case 'mp4':
      case 'mov':
      case 'mpg':
      case 'mpeg':
        return true;
    }
    return false;
  };

  const getExtension = (filename) => {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  };

  return (
    <Layout>
      <div>
        <form action="." encType="multipart/form-data">
          <input type="file" onChange={getVideo} />
        </form>
      </div>
    </Layout>
  );
};

// React.createClass({
//   getInitialState: function () {
//     return {
//       file: '',
//       imagePreviewUrl: ''
//     }
//   },
//   pressButton: function () {
//     e.preventDefault();
//   // TODO: do something with -> this.state.file
//   console.log('handle uploading-', this.state.file);
//   },
//   getPhoto: function (e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }

//     reader.readAsDataURL(file);

//   },
//   render: function () {
//     let {imagePreviewUrl} = this.state;
//     let imagePreview = null;
//     if (imagePreviewUrl) {
//       imagePreview = (<img src={imagePreviewUrl} />);
//     } else {
//       imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//     }
//     return (
//       <div>
//       <form action='.' enctype="multipart/form-data">
//         <input type='file'  onChange={this.getPhoto}/>
//         <button onClick={this.pressButton}> Get it </button>
//       </form>
//       <div className="imgPreview">
//         {imagePreview}
//       </div>
//       </div>
//     )
//   }
// })

export default FileInput;
