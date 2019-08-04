var x = document.getElementById("data_diri");
var y = document.getElementById("Bahasa");
var z = document.getElementById("pend");

function biodiri() { 
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }else{
        x.style.display = "none";  
    }
  }

function bahasapemrogrman() {
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
    }else{
        y.style.display = "none"; 
    }
}

function pendidikan() {
    if (z.style.display === "none") {
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
    }else{
        z.style.display = "none"; 
    }
}

function imgOnclick(){
    alert("Hai Namaku Dimas aku suka coding back end");
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
function off() {
    document.getElementById("overlay").style.display = "none";
}