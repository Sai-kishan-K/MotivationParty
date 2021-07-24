function genertaeRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function changeBackgroundColor(){
    let colorBg=document.getElementById('color-overlay');
    colorBg.style.backgroundColor=genertaeRandomColor();
}
function changeBgText(){
    let textBg=document.getElementById('text-bg');
    if(textBg.innerHTML=='I WILL WIN')
        textBg.innerHTML='NOT IMMEDIATELY';
    else if(textBg.innerHTML=='NOT IMMEDIATELY')
        textBg.innerHTML='BUT DEFINITELY';
    else if(textBg.innerHTML=='BUT DEFINITELY')
        textBg.innerHTML='I WILL WIN';
}
function checkBg(){
    genertaeRandomColor();
    changeBackgroundColor();
    changeBgText();
}
setInterval(checkBg,500);