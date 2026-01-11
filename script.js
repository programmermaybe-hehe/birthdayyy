let music=document.getElementById("bgMusic");
document.body.addEventListener("click",()=>music.play(),{once:true});

/* Candle */
let blown=false;
function blow(){
  if(blown) return;
  blown=true;
  candle.classList.add("blowed");
  setTimeout(()=>{
    scene1.style.display="none";
    scene2.style.display="flex";
  },1000);
}

/* NO button thief */
let noBtn=document.getElementById("noBtn");
let runner=document.getElementById("runner");

noBtn.addEventListener("touchstart",stealNo);
noBtn.addEventListener("click",stealNo);

function stealNo(){
  let rect=noBtn.getBoundingClientRect();
  runner.style.left=rect.left+"px";
  setTimeout(()=>{
    noBtn.style.display="none";
    runner.classList.add("run");
    forceText.classList.remove("hidden");
    hearts();
  },600);
}

function hearts(){
  for(let i=0;i<15;i++){
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left=Math.random()*window.innerWidth+"px";
    h.style.bottom="100px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1000);
  }
}

/* Gift */
function showGift(){
  document.querySelector(".gift").classList.remove("hidden");
}
function openGift(){
  document.querySelector(".gift").classList.add("open");
  setTimeout(()=>{
    scene2.style.display="none";
    scene3.style.display="flex";
  },1000);
}

/* Memories */
function nextScene(){
  scene3.style.display="none";
  scene4.style.display="flex";
  typeMessage();
}

/* Final message */
let text="Happy Birthday Chikuuu… 🤍\nI hope this little space feels warm, just like you do.\nEven on the quiet days, you somehow make things feel lighter.\nI’m really glad you exist.\nAnd I hope this year gives you everything you’ve been wishing for.\nI hope today makes you smile a little more than usual.\nYou have no idea how special you are.\nStay just the way you are… always. You are the best!!!!!!";

let i=0;

function typeMessage(){
  if(i<text.length){
    message.innerHTML+=text.charAt(i);
    i++;
    setTimeout(typeMessage,50);
  }else{
    irlGift.classList.remove("hidden");
    setTimeout(()=>finalGifts.classList.remove("hidden"),1500);
  }
}

function showBouquet(){
  bouquetText.classList.remove("hidden");
}

/* Sakura */
setInterval(()=>{
  let p=document.createElement("div");
  p.className="petal";
  p.innerHTML="🌸";
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=5+Math.random()*5+"s";
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),10000);
},400);

/* Snow */
setInterval(()=>{
  let s=document.createElement("div");
  s.className="snowflake";
  s.innerHTML="❄";
  s.style.left=Math.random()*100+"vw";
  s.style.animationDuration=6+Math.random()*6+"s";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),12000);
},600);
