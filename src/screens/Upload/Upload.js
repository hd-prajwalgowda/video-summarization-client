import React from 'react';
import Layout from '../../components/Layout';

const Upload = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="my-8 w-1/2 h-96 bg-gray-300">
          <div className="">Content</div>
        </div>
      </div>
      <div className="">
        <select className="mx-80 border rounded border-gray-600 text-black-600 h-4 p-5 bg-white">
          <option value="" disabled selected hidden>
            Select User..
          </option>
          <option>User 1</option>
          <option>User 2</option>
          <option>User 3</option>
          <option>User 4</option>
        </select>
        <select className="border rounded border-gray-600 text-black-600 h-4 p-5 bg-white">
          <option value="" disabled selected>
            Select Video..
          </option>

          <option>video1</option>
          <option>video2</option>
          <option>video3</option>
        </select>
      </div>
    </Layout>
  );
};

export default Upload;
