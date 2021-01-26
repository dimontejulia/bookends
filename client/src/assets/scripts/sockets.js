const socket = io('/');
//Gets html video grid
const videoGrid = document.getElementById('video-grid');
// Undefined has servers generate IDs
const myPeer = new Peer(undefined, {
  host: '/',
  port: '8080'
});
// The video element
const myVideo = document.createElement('video');
// Stops audio loopback
myVideo.muted = true;

const peers = {};

// Audio and video from camera
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream);

  //listen for other's calls
  myPeer.on('call', call => {
    // Rx video
    call.answer(stream);
    const video = document.createElement('video');
    // Tx video to other user
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream);
    });
  });

  // Allows others to join the client
  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream);
  });
});

// 
socket.on('user-disconnected', userId => {
  //check if userid is in the call obj, otherwise it closes the call.
  if (peers[userId]) peers[userId].close()
});

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
});



function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement('video');
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream);
  });
  //clean up videos
  call.on('close', () => {
    video.remove();
  });
  //Associates uids to the call itself
  peers[userId] = call
}

//plays the video
function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  });
  // Puts video on grid
  videoGrid.append(video);
}