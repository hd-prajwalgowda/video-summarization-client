import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { GoPrimitiveDot } from 'react-icons/go';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const users = ['Nidhi', 'Prajwal', 'Prathik', 'Venkatesh'];

const videos = ['video1.mp3', 'video2.mp3', 'video3.mp3'];

const Upload = () => {
  const [selectedUser, setSelectedUser] = useState('Nidhi');
  const [selectedVideo, setSelectedVideo] = useState('video1.mp3');
  const [timeStamp, setTimeStamp] = useState('');

  const onClick = () => {
    console.log(selectedUser);
    console.log(selectedVideo);
    console.log(timeStamp);

    axios
      .post('http://localhost:5000/api/upload_summary', {
        timeStamp,
        user: selectedUser,
        video: selectedVideo,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="my-2 mb-4 bg-gray-300">
          <ReactPlayer
            controls={true}
            height="390px"
            url="https://www.youtube.com/watch?v=WMweEpGlu_U"
          />
        </div>
      </div>
      <div className="flex justify-center my-2">
        <Listbox
          as="div"
          className="mr-8 "
          value={selectedUser}
          onChange={setSelectedUser}
        >
          <Listbox.Label className="text-gray-400 text-sm font-medium">
            Select User...
          </Listbox.Label>
          <div className="relative">
            <span className="inline-block w-40">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer text-sm focus:outline-none ring-0">
                <span className="block truncate">{selectedUser}</span>
              </Listbox.Button>
            </span>
            <Listbox.Options className="absolute border border-gray-300 rounded mt-1 w-40">
              {users.map((user) => (
                <Listbox.Option
                  key={user}
                  value={user}
                  className="cursor-pointer"
                >
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                      } relative py-2 pl-10 pr-4`}
                    >
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {user}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active
                              ? 'text-amber-900 bg-amber-100'
                              : 'text-gray-900'
                          } absolute inset-y-0 left-0 flex items-center pl-2`}
                        >
                          <GoPrimitiveDot className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <Listbox
          as="div"
          className="mr-8"
          value={selectedVideo}
          onChange={setSelectedVideo}
        >
          <Listbox.Label className="text-gray-400 text-sm font-medium">
            Select Video...
          </Listbox.Label>
          <div className="relative">
            <span className="inline-block w-40">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md text-sm  focus:outline-none ring-0  cursor-pointer">
                <span className="block truncate">{selectedVideo}</span>
              </Listbox.Button>
            </span>
            <Listbox.Options className="absolute border border-gray-300 rounded mt-1 w-40">
              {videos.map((video) => (
                <Listbox.Option
                  key={video}
                  value={video}
                  className="cursor-pointer"
                >
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                      } cursor-default-select-none relative py-2 pl-10 pr-4`}
                    >
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {video}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active
                              ? 'text-amber-900 bg-amber-100'
                              : 'text-gray-900'
                          } absolute inset-y-0 left-0 flex items-center pl-2`}
                        >
                          <GoPrimitiveDot className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <div className="w-60 h-30 text-sm">
          <label
            htmlFor="duration"
            className="font-semibold text-gray-400 py-2"
          >
            Duration {JSON.stringify(timeStamp)}
          </label>
          <textarea
            required=""
            name="message"
            id=""
            className="w-60 h-28 block bg-grey-lighter text-grey-darker border border-grey-lighter"
            onChange={(e) => setTimeStamp(e.target.value)}
            placeholder=""
            spellCheck="false"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end w-3/4">
        <Button title="Submit" onClick={onClick}></Button>
      </div>
    </Layout>
  );
};

export default Upload;
