let face= document.getElementById('face')
let secondScreen= document.getElementById('secondscreen')
let thirdScreen= document.getElementById('thirdscreen')
let fourthdScreen= document.getElementById('fourthscreen')
let screen= document.getElementById('screen')
let swipe= document.getElementById('swipe')
let display = document.getElementById('display')
let disp = document.getElementById('disp')
let disp2 = document.getElementById('disp2')
let add = document.getElementById('add')
let but = document.getElementById('but14')
let hour = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let ho = document.getElementById('ho')
let min = document.getElementById('min')
let red = document.getElementById('red')
let off = document.getElementById('off')
let contactScreen = document.getElementById('contactscreen')
let wo = document.getElementById('wo')
let st = document.getElementById('st')
let amal = document.getElementById('amal')
let tabl = document.getElementById('tabl')
let lif = document.getElementById('lif')
let sy = document.getElementById('sy')
let addOn = document.getElementById('addon')
let tex = document.getElementById('tex')
let can = document.getElementById('can')
let newcontactScreen = document.getElementById('newcontactscreen')
let input1=document.getElementById('input1')
let input2=document.getElementById('input2')
let input3=document.getElementById('input3')
let power=document.getElementById('power')
let shown=document.getElementById('shown')
let dialNumber;
let contactObj;
let numberObj;



function swip(){
document.getElementById('face').style.display='inherit';
document.getElementById('secondscreen').style.display='none';
}

function numb(numba){
display.value+=numba
if (display.value!=='') {
    add.style.display='inherit'
} else {
    add.style.display='none'
}
if (display.value!=='') {
  but.style.display='inline'  
} else {
    but.style.display='none'  
}

}

function del(){
 display.value= display.value.slice(0,-1);
 if (display.value==='') {
    but.style.display='none' ;
    add.style.display='none' 
  } else {
      but.style.display='inline'  
     
  }
  // if (add.innerHTML==input1.value) {
  // add.style.display='block'
  // input1.style.display='none'
  // } else {
  //   add.style.display='none'
  //   input1.style.display='block'
  // }
}
function call(){
face.style.display='none'
thirdScreen.style.display='inherit'
}

function tim(){
  let tob = new Date
   hour.innerHTML=tob.getHours()
   ho.innerHTML=tob.getHours()
   minutes.innerHTML= tob.getMinutes()
   min.innerHTML= tob.getMinutes()
}
tim()
setInterval(() => {
  tim()
}, 1000);

function back(){
  thirdScreen.style.display='none'
  face.style.display='inherit'
  contactScreen.style.display='none'
}
function cut(){
fourthdScreen.style.display='none'
add.style.display='none'
thirdScreen.style.display='inherit'
display.value='';
but.style.display='none'  


}

function dial(){

if (display.value==='') {
  thirdScreen.style.display='inherit';
fourthdScreen.style.display='none';
} else{

  thirdScreen.style.display='none';
fourthdScreen.style.display='inherit';
}
// dialNumber=display.innerHTML
disp.value=display.value
if (add.innerHTML=input1.value) {
  disp.value=add.innerHTML;

}

}
function ca(){
thirdScreen.style.display='block'
contactScreen.style.display='none'


}
function powe(){
off.style.display='block'
// screen.style.display='none'?screen.style.display='block':screen.style.display='none'
screen.style.display='none'


}
function tact(){
thirdScreen.style.display='none';
contactScreen.style.display='block';
addOn.style.display='none'
}



function newnumber(){
add.style.display='transparent';
addOn.style.display='block';
}

function create(){
thirdScreen.style.display='none'
newcontactScreen.style.display='block'
addOn.style.display='none'
tex.value=display.value
}
function done(){
newcontactScreen.style.display='none';
thirdScreen.style.display='block'
add.innerHTML=`<span class="mobilo">${input1.value} <span class="mobi">moblie</span></span>`
}


let phoneBook=[
  {
    name:'Tobi',
    number:'08134384556'

  },
  {
    name:'Swt@',
    number:'07067458765'

  },
  {
    name:'LOML',
    number:'08145674634'

  },
  {
    name:'Portable',
    number:'08134785647'

  },
  {
    name:'Tizzy Amali',
    number:'08156748945'

  },
  {
    name:'Posy',
    number:'08065435678'
  },
  {
    name:'TKing',
    number:'08134384556'

  },
  {
    name:'TBoy',
    number:'08134384556'

  },
  {
    name:'Toba',
    number:'08134384556'

  },
  {
    name:'TGreat',
    number:'08134384556'

  },
]

function show(){
phoneBook.forEach((send)=>{
shown.innerHTML+=`<button id="find" onclick="findContact('${send.name}')">
<div id="st">${send.name}</div>
<div id="bo"></div>
</button>

`

})
}
show()
function findContact(contactName){
  console.log(contactName);
  showScreen(contactName)
  contactObj=phoneBook.find((number)=>{
  return number.name
  })
console.log( contactObj);


}
function showScreen(showName){
  contactScreen.style.display='none';
  fourthdScreen.style.display='block'
  disp.value=showName
  
}

// function findNumber(contactNumber){
// console.log(contactNumber);
// numberObj= phoneBook.find((seen)=>{
//   return seen.number==contactNumber
// })
// console.log(numberObj);
// }
