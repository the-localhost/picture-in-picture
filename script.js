const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// selects the media stream, pass to video element and play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
        console.error(error);
    }
}

button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;
    // start picture-in-picture 
    await videoElement.requestPictureInPicture();
    // enable back the button
    button.disabled=false;
});

// On Load
selectMediaStream();