function myFunction() {
    var x = document.getElementsByClass("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }





  var preloader = document.getElementById("preloader");

window.addEventListener("load" , function(){
    preloader.style.display = "none";
})