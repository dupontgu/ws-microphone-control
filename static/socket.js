const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
const socketUrl = socketProtocol + '//' + window.location.hostname + ':' + window.location.port + '/'
const socket = new WebSocket(socketUrl);
let opened = false
let micStatus = true

socket.onopen = () => {
  opened = true
}

socket.onmessage = e => {
  micStatus = (event.data > 0)
  let color = micStatus ? "green" :  "red"
  document.body.style.backgroundColor = color;
  document.getElementById("toggleButton").innerHTML = micStatus ? "MUTE" : "UNMUTE";
}

function toggleMute() {
  if (!opened) {
    return
  }
  let changedMicVolume = micStatus ? 0 : 100
  socket.send(changedMicVolume)
}
