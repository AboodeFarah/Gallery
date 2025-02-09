const mybuttun = document.getElementById("mybuttun");
mybuttun.addEventListener("click",function(){
  this.innerHTML = "uploading..."
});
mybuttun.addEventListener("mouseleave",function(){
  this.innerHTML = "upload"
});