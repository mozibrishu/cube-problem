let scene = document.getElementById('scene');
let cube = document.getElementById('cube');

let originalVideo = document.getElementById('myVideo');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video" onended="endOpearation()"></video>`

function firstOp() {
    cube.classList.add('cubepic-animation');
    cube.classList.remove('hidden');

}

firstOp();
cube.addEventListener('animationend', () => {
    cube.classList.add('hidden');
    cube.classList.remove('cubepic-animation');
    originalVideo.innerHTML = videoHtml;
});

function endOpearation() {
    originalVideo.innerHTML = '';
    firstOp();
}