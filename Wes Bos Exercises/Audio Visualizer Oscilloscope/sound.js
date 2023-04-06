const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyser;
let bufferLength;

function handleError(err) {
  console.log('You must give access to the microphone');
}

async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);
  // How much data should we collect?
  analyser.fftSize = 2 ** 10;
  // Pull the data off the audio
  // How many pieces of data are there
  bufferLength = analyser.frequencyBinCount;
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
}

function drawTimeData(timeData) {
  // Inject the time data into the time data array
  analyser.getByteTimeDomainData(timeData);
  // Now that we have the time data, we can draw it on the canvas
  // Clear the canvas
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // Setup some canvas drawing
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ffc600';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  console.log(sliceWidth);
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // Draw our lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });

  ctx.stroke();

  // Call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

getAudio();
