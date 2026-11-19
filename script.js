const overlay =
document.getElementById("overlay");

const video =
document.getElementById("camera");

const previewContainer =
document.getElementById("previewContainer");

const previewImage =
document.getElementById("previewImage");

let capturedImageData = null;

let currentTrack = null;

/* ---------- GRID ---------- */

function createGrid(n)
{
    overlay.innerHTML = "";

    overlay.style.gridTemplateColumns =
    `repeat(${n},1fr)`;

    overlay.style.gridTemplateRows =
    `repeat(${n},1fr)`;

    for(let i=0;i<n*n;i++)
    {
        const cell =
        document.createElement("div");

        cell.className =
        "cell";

        overlay.appendChild(cell);
    }
}

createGrid(5);

/* ---------- CAMERA ---------- */

async function startCamera()
{
    try
    {
        const stream =
        await navigator.mediaDevices.getUserMedia({

            video:{
                facingMode:{
                    ideal:"environment"
                }
            },

            audio:false
        });

        video.srcObject =
        stream;

        currentTrack =
        stream.getVideoTracks()[0];

        await video.play();

        console.log(
            currentTrack.getCapabilities()
        );

        document
        .getElementById("status")
        .innerHTML =
        "Rear Camera Ready";
    }
    catch(error)
    {
        document
        .getElementById("status")
        .innerHTML =
        error.name;
    }
}

startCamera();

/* ---------- GRID TYPE ---------- */

document
.getElementById("gridType")
.addEventListener("change",function(){

    createGrid(
        parseInt(this.value)
    );

});

/* ---------- GRID SIZE ---------- */

document
.getElementById("sizeSlider")
.addEventListener("input",function(){

    overlay.style.width =
    this.value + "vw";

    overlay.style.height =
    this.value + "vw";

});

/* ---------- OPACITY ---------- */

document
.getElementById("opacitySlider")
.addEventListener("input",function(){

    overlay.style.opacity =
    this.value / 100;

});

/* ---------- ZOOM ---------- */

document
.getElementById("zoomSlider")
.addEventListener(
    "input",
    async function()
    {

        const zoom =
        parseFloat(
            this.value
        );

        document
        .getElementById("zoomValue")
        .innerHTML =
        zoom.toFixed(1) + "x";

        if(!currentTrack)
        {
            return;
        }

        const capabilities =
        currentTrack.getCapabilities();

        if(capabilities.zoom)
        {
            try
            {
                await currentTrack
                .applyConstraints({

                    advanced:[
                        {
                            zoom:zoom
                        }
                    ]

                });
            }
            catch(error)
            {
                console.log(
                    "Zoom Error",
                    error
                );
            }
        }
    }
);

/* ---------- CAPTURE ---------- */

document
.getElementById("captureBtn")
.addEventListener("click",()=>{

    const canvas =
    document.getElementById("canvas");

    canvas.width =
    video.videoWidth;

    canvas.height =
    video.videoHeight;

    const ctx =
    canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    capturedImageData =
    canvas.toDataURL(
        "image/png"
    );

    previewImage.src =
    capturedImageData;

    previewContainer.style.display =
    "flex";

});

/* ---------- SAVE ---------- */

document
.getElementById("saveBtn")
.addEventListener("click",()=>{

    const sampleId =
    document
    .getElementById("sampleId")
    .value.trim()

    ||

    "Sample";

    const filename =
    sampleId +
    "_" +
    Date.now() +
    ".png";

    const link =
    document.createElement("a");

    link.href =
    capturedImageData;

    link.download =
    filename;

    link.click();

});

/* ---------- RETAKE ---------- */

document
.getElementById("retakeBtn")
.addEventListener("click",()=>{

    previewContainer.style.display =
    "none";

});
