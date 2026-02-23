AOS.init({
  offset: 120,
  once: false
});


const characters = [
  {
    name: "Haruka Sakura",
    img: "image/Haruka-Sakura.jpg",
    color: "rgba(0,150,255,0.6)",
    strength: 95,
    speed: 85
  },
  {
    name: "Hayato Suo",
    img: "image/suo.jpg",
    color: "rgba(180,0,255,0.6)",
    strength: 80,
    speed: 90
  },
  {
    name: "Hajime Umemiya",
    img: "image/Hajime-Umemiya.jpg",
    color: "rgba(255,200,0,0.6)",
    strength: 92,
    speed: 75
  },
  {
    name: "kayotaro",
    img: "image/Kayotaro.jpg",
    color: "rgba(0,150,255,0.6)",
    strength: 95,
    speed: 85
  },
  {
    name: "Misuki",
    img: "image/Mitsuki.jpg",
    color: "rgba(180,0,255,0.6)",
    strength: 80,
    speed: 90
  },
  {
    name: "Tasuku Tsubakino",
    img: "image/Tasuku Tsubakino.jpg",
    color: "rgba(255,200,0,0.6)",
    strength: 92,
    speed: 75
  }
];
let index = 0;

const charImg = document.getElementById("charImg");
const charName = document.getElementById("charName");
const bgGlow = document.getElementById("bgGlow");

const strengthCircle = document.getElementById("strengthCircle");
const speedCircle = document.getElementById("speedCircle");

const strengthNum = document.getElementById("strengthNum");
const speedNum = document.getElementById("speedNum");

function animateCircle(circle, value){
  const offset = 314 - (314 * value)/100;
  circle.style.strokeDashoffset = offset;
}

function animateNumber(element, value){
  let start = 0;
  const interval = setInterval(()=>{
    if(start >= value){
      clearInterval(interval);
    } else {
      start++;
      element.textContent = start;
    }
  },10);
}

function updateCharacter(){
  const c = characters[index];

  charImg.classList.add("fade");

  setTimeout(()=>{
    charImg.src = c.img;
    charName.textContent = c.name;

    bgGlow.style.background =
      `radial-gradient(circle, ${c.color}, transparent 70%)`;

    animateCircle(strengthCircle, c.strength);
    animateCircle(speedCircle, c.speed);

    animateNumber(strengthNum, c.strength);
    animateNumber(speedNum, c.speed);

    charImg.classList.remove("fade");
  },300);
}

document.getElementById("next").onclick = ()=>{
  index = (index + 1) % characters.length;
  updateCharacter();
};

document.getElementById("prev").onclick = ()=>{
  index = (index - 1 + characters.length) % characters.length;
  updateCharacter();
};

setInterval(()=>{
  index = (index + 1) % characters.length;
  updateCharacter();
},5000);

updateCharacter();