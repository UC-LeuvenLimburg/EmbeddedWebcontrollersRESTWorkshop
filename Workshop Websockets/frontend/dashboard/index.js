console.log('Javascript file works');
const getData = async ()=>{
    await fetch("http://localhost:3000/getData")
        .then(request => request.json())
        .then(data => {
          data.map(waarde=>{
            let templateString = `<tr>${waarde}</tr>`
            document.querySelector('#temperatureTable').innerHTML += templateString
          })
        });
}

document.querySelector('#getData').addEventListener('click', () => {
    console.log('click');
    getData();
});


let socket = new WebSocket("ws:localhost:8080");

socket.onopen = (e) => {
  console.log("[open] Connection established");
  console.log("Sending to server");
  socket.send("My name is John");
};

socket.onmessage = (event) => {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};