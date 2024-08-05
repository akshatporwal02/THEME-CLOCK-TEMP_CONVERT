function themechange() {
  var li = document.getElementById("hero").style;
  var na = document.getElementById("nav").style;
  var explore = document.getElementById("exp").style;
  var con = document.body.style;
  var clk = document.getElementById("myclk").style
  var abt=document.getElementById("ABOUT").style
  var txt=document.getElementById("text").style
  var tem=document.getElementById("temprature").style
  var rmp=document.getElementById("removepage").style
  if (con.background == "") {
    con.background = "black";
    li.color = "#0f92ca";
    na.color = "#0f92ca";
    explore.color = "#0f92ca";
    explore.borderColor = "#0f92ca";
    clk.backgroundColor="black"
    tem.backgroundColor="black"
    abt.color="#0f92ca"
    txt.color="#0f92ca"
    rmp.color="white"
    document.getElementById("proj").style.color='#0f92ca'
    document.getElementById("temp").style.color="#0f92ca"
    document.getElementById("imp").classList.remove("fa-moon"); //classList=>
    var x = document.getElementById("imp").classList.add("fa-sun");
    document.getElementById("imp").style.color = "#FDB813";
  } else {
    con.background = "";
    li.color = "";
    na.color = "";
    explore.color = "";
    explore.borderColor = "";
    document.getElementById("imp").classList.remove("fa-sun");
    document.getElementById("imp").classList.add("fa-moon");
    document.getElementById("imp").style.color = "black";
    clk.backgroundColor=""
    abt.color=""
    txt.color=""
    document.getElementById("temp").style.color=""
    tem.backgroundColor=""
  }
}
// function changeicon(){
//     document.getElementById('imp').innerHTML = <i class="fa-regular fa-sun"></i>
// }
function menuopen() {
  document.getElementById("link").style.right = "0";
  // menuch.right="0"
}
function menuclose() {
  document.getElementById("link").style.right = "-200px";
}

setInterval(() => {
  // let x= document.getElementById('time').innerHTML
  let date = new Date();
  let hours = date.getHours().toLocaleString().padStart(2, "0");
  let minutes = date.getMinutes().toLocaleString().padStart(2, "0");
  let seconds = date.getSeconds().toLocaleString().padStart(2, "0");
  let currenttime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").innerHTML = hours;
  document.getElementById("time1").innerHTML = minutes;
  document.getElementById("time2").innerHTML = seconds;
  // document.getElementById("time").style.fontSize="50px"
}, 1000);

function temp() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result = document.getElementById("result");
  let input = document.getElementById("input").value;
  if (isNaN(input)) {
    alert("not a number");
  }
  let tempur = parseFloat(input);
  let covertedtemp;
  if (from === "celcius") {
    if (to === "farhenite")
      result.innerText = `converted temprature = ${(9 / 5) * tempur + 32}${to}`;
    else if (from === "celcius" && to === "kelvin") {
      result.innerText = `converted temprature = ${tempur + 273.15}${to}`;
    } else {
      result.innerText = `converted temprature = ${tempur}${to}`;
    }
  }
  //-----------------------------------------------
  if (from === "farhenite") {
    if (to === "celcius"){
      result.innerText = `converted temprature = ${(tempur - 32) * (5 / 9)}${to}`;
  } 
  else if (from === "farhenite" && to === "kelvin") {
    result.innerText = `converted temprature = ${
      (tempur - 32) * (5 / 9) + 273.15
    }${to}`;
  }
   else {
    result.innerText = `converted temprature = ${tempur}${to}`;
  }
}
//------------------------------------------------
if (from === "kelvin"){
    if(to==="celcius")
        {
  result.innerText = `converted temprature = ${tempur - 273.15}${to}`;
} 
    else if (from === "kelvin" && to === "farhenite") 
        {
  result.innerText =`converted temprature = ${(temp - 273.15) * (9 / 5) + 32}${to}`;
} 
    else{
  result.innerText =`converted temprature = ${tempur}${to}`;
    }
}
}
function login(){
  let login = document.getElementById("form").style
  login.left='630px'
  // login.top='400px'
  // login.padding='50px'
  login.background="#0f92ca"
  login.lineHeight='20px'
  login.padding="20px"
  document.getElementById("removepage").style.right="-1300px"
  document.getElementById("removepage").style.display='none'
  document.getElementById("imgg").style.right="-1000px"
  document.getElementById("imgg").style.display='none'
}
function nologin(){
  document.getElementById("form").style.left="-1050px"
  document.getElementById("removepage").style.display='block'
  document.getElementById("removepage").style.right="300px"
  document.getElementById("imgg").style.right="-7000px"
  document.getElementById("imgg").style.display='none'
  // document.getElementById("removepage").style.left="300px"
  
}

