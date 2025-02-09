const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click",function(){
  this.innerHTML = "uploading..."
});
mybutton.addEventListener("mouseleave",function(){
  this.innerHTML = "upload"
});