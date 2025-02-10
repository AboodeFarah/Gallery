const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click",function(){
  this.innerHTML = "uploading..."
});
mybutton.addEventListener("mouseleave",function(){
  this.innerHTML = "upload"
});

  document.addEventListener("contextmenu", function(event) {
      event.preventDefault(); // Wuxuu xiraa menu-ga right-click
      alert("Sorry there's no Right-click!");
  });

  let circle = document.getElementById("circle");
  
  document.addEventListener("mousemove", function(event) {
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
  });

