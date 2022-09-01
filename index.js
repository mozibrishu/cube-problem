let scene = document.getElementById('scene');
let cube = document.getElementById('cube');
let backSide = document.getElementById('backSide');

let originalVideo = document.getElementById('myVideo');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video" onended="endOpearation()"></video>`

function firstOp() {
    cube.classList.remove('cubepic-animation');
    

    setTimeout(() => {
        cube.classList.add('cubepic-animation');
    }, 100);
    
    setTimeout(()=>{
        backSide.innerHTML = videoHtml;
        setTimeout(() => {
            cube.style.animationPlayState = 'paused';
        }, 2500);
    },3000);

}

firstOp();
cube.addEventListener('animationend', () => {
    firstOp();
});

function endOpearation() {
    cube.style.animationPlayState = 'running';
    setTimeout(() => {
        backSide.innerHTML = '';
    }, 3000);
}