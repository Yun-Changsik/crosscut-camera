*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:black;
    overflow:hidden;
    font-family:Arial,sans-serif;
}

#camera{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    object-fit:cover;
    z-index:1;
}

#title{
    position:fixed;
    top:8px;
    width:100%;
    text-align:center;
    color:white;
    font-size:20px;
    font-weight:bold;
    z-index:50;
}

#panel{
    position:fixed;
    top:40px;
    left:10px;

    width:170px;

    background:rgba(0,0,0,0.65);

    color:white;

    padding:8px;

    border-radius:10px;

    font-size:11px;

    display:flex;
    flex-direction:column;
    gap:6px;

    z-index:50;
}

#panel input,
#panel select{
    width:100%;
}

#status{
    text-align:center;
    color:lime;
}

#overlay{
    position:fixed;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    width:30vw;
    height:30vw;

    border:3px solid lime;

    display:grid;

    z-index:10;

    pointer-events:none;
}

.cell{
    border:1px solid rgba(0,255,0,0.7);
}

#crosshair{

    position:fixed;

    top:50%;
    left:50%;

    width:40px;
    height:40px;

    transform:translate(-50%,-50%);

    z-index:30;
}

#crosshair:before{
    content:"";
    position:absolute;
    left:50%;
    width:2px;
    height:100%;
    background:red;
}

#crosshair:after{
    content:"";
    position:absolute;
    top:50%;
    width:100%;
    height:2px;
    background:red;
}

#captureBtn{

    position:fixed;

    bottom:20px;
    left:50%;

    transform:translateX(-50%);

    width:90px;
    height:90px;

    border:none;

    border-radius:50%;

    background:white;

    font-size:18px;
    font-weight:bold;

    color:#007aff;

    z-index:50;
}

canvas{
    display:none;
}

#previewContainer{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,0.95);

    display:none;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    z-index:999;
}

#previewImage{

    width:90%;

    max-height:70%;

    object-fit:contain;

    border:2px solid white;
}

#previewButtons{

    display:flex;

    gap:20px;

    margin-top:20px;
}

#previewButtons button{

    padding:12px 20px;

    border:none;

    border-radius:10px;

    font-size:16px;
}

#saveBtn{
    background:#00aa00;
    color:white;
}

#retakeBtn{
    background:#cc0000;
    color:white;
}
