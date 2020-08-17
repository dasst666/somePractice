// Scroll
let progress = document.getElementById("progressbar");
let totalHeight = (document.body.scrollHeight = window.innerHeight);
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");


// Clock
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// Paralax
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}