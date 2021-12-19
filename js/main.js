const countEl = document.getElementById('count');
var music = document.getElementById("mymp");
var btn = document.getElementById("btn");
var photogallery = document.getElementById("center-wrap");
updateVisitCount();
btn.onclick=function(){
    photogallery.style.display = "flex";
    music.play();
    btn.style.display = "none";
}
function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/trialsite44.000webhostapp.com/trail/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}