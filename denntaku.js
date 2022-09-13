let displayElement = document.getElementById("display");

const seven = document.getElementById("seven");

const eight = document.getElementById("eight");

const nine = document.getElementById("nine");

const plus = document.getElementById("plus");

const four = document.getElementById("four");

const five = document.getElementById("five");

const six = document.getElementById("six");

const minus = document.getElementById("minus");

const one = document.getElementById("one");

const two = document.getElementById("two");

const three = document.getElementById("three");

const multiplication = document.getElementById("multiplication");

const zero = document.getElementById("zero");

const zerozero = document.getElementById("zerozero");

const comma = document.getElementById("comma");

const division = document.getElementById("division");

const AC = document.getElementById("AC");

const equal = document.getElementById("equal");

let equalID = 0;

let commaID = 0;

AC.addEventListener("click",function(){
    displayElement.innerHTML = 0;
    plus.disabled = false
  minus.disabled = false
  multiplication.disabled = false
  division.disabled = false
})

seven.addEventListener("click", function () {
    if(equalID == 1){
       displayElement.innerHTML=""+displayElement.innerHTML+7;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 7;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 7;
    }
    }
})

eight.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+8;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 8;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 8;
    }
    }
})

nine.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+9;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0"){
  displayElement.innerHTML = 9;
  
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 9;
    }
    }
})

four.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+4;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 4;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 4;
    }
    }
})

five.addEventListener("click", function () {
    if(equalID == 1){
       displayElement.innerHTML=""+displayElement.innerHTML+5;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 5;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 5;
    }
    }
})

six.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+5;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 6;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 6;
    }
    }
})

one.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+1;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 1;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 1;
    }
    }
})

two.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=2;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 2;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 2;
    }
    }
})


three.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+3;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  displayElement.innerHTML = 3;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 3;
    }
    }
})

zero.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+0;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  ;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + 0;
    }
    }
})

zerozero.addEventListener("click", function () {
    if(equalID == 1){
        displayElement.innerHTML=""+displayElement.innerHTML+0;
        equalID = 0;
    } else{
        if(displayElement.innerHTML ==="0" ){
  ;
 
    }else{
        displayElement.innerHTML = "" + displayElement.innerHTML + "00";
    }
    }
})


comma.addEventListener("click", function () {
  let Str = String(displayElement.innerHTML);
  if (commaID==1){
      ;
  }else{
 
    displayElement.innerHTML = "" + displayElement.innerHTML + ".";
    commaID=1
    }
  })

plus.addEventListener("click", function () {
    commaID = 0;
    minus.disabled = true
    multiplication.disabled = true
    division.disabled = true
  let Str = String(displayElement.innerHTML);
  if (Str.match(/＋/)) {;
  } else {
    displayElement.innerHTML = "" + displayElement.innerHTML + "＋";
  }
})

minus.addEventListener("click", function () {
    commaID = 0;
    plus.disabled = true
    multiplication.disabled = true
    division.disabled = true
  let Str = String(displayElement.innerHTML);
  if (Str.match(/-/)) {;
  } else {
    displayElement.innerHTML = "" + displayElement.innerHTML + "-";
  }
})

multiplication.addEventListener("click", function () {
    commaID = 0;
    plus.disabled = true
    minus.disabled = true
    division.disabled = true
  let Str = String(displayElement.innerHTML);
  if (Str.match(/＊/)) {;
  } else {
    displayElement.innerHTML = "" + displayElement.innerHTML + "＊";
  }
})

division.addEventListener("click", function () {
    commaID = 0;
    plus.disabled = true
    minus.disabled = true
    multiplication.disabled = true
  let Str = String(displayElement.innerHTML);
  if (Str.match(/／/)) {;
  } else {
      
    displayElement.innerHTML = "" + displayElement.innerHTML + "／";
  }
})

equal.addEventListener("click", function () {
  let Str = String(displayElement.innerHTML);
  equalID=1;
  commaID=0;
  plus.disabled = false
  minus.disabled = false
  multiplication.disabled = false
  division.disabled = false

  
  if (Str.match(/＋/)) {
    let cut1 = displayElement.innerHTML.substr(0, displayElement.innerHTML.indexOf('＋'));
    console.log(cut1);
    let cut2 = displayElement.innerHTML.substr(displayElement.innerHTML.indexOf('＋') + 1);
    console.log(cut2);
    cut1 = Number(cut1);
    cut2 = Number(cut2);
    displayElement.innerHTML = cut1 + cut2;
    
    

    
    
    
  
  } else if (Str.match(/-/)) {
    let cut1 = displayElement.innerHTML.substr(0, displayElement.innerHTML.indexOf('-'));
    console.log(cut1);
    let cut2 = displayElement.innerHTML.substr(displayElement.innerHTML.indexOf('-') + 1);
    console.log(cut2);
    cut1 = Number(cut1);
    cut2 = Number(cut2);
    displayElement.innerHTML = (cut1 - cut2).toFixed(12) ;
    
    
  } else if (Str.match(/／/)) {
  let cut3 = displayElement.innerHTML.substr(0, displayElement.innerHTML.indexOf('／'));
  console.log(cut3);
  let cut4 = displayElement.innerHTML.substr(displayElement.innerHTML.indexOf('／') + 1);
  console.log(cut4);
  cut3 = Number(cut3);
  cut4 = Number(cut4);
  displayElement.innerHTML = ( cut3/cut4).toFixed( 12 ); 
  console.log(displayElement);

 
  }else if (Str.match(/＊/)) {
  let cut1 = displayElement.innerHTML.substr(0, displayElement.innerHTML.indexOf('＊'));
  console.log(cut1);
  let cut2 = displayElement.innerHTML.substr(displayElement.innerHTML.indexOf('＊') + 1);
 
  cut1 = Number(cut1);
  cut2 = Number(cut2);
  displayElement.innerHTML = (cut1 * cut2).toFixed(12);
      
  }}
)