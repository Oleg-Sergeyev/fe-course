function rate_news(){
   let heart = document.getElementById ('heart-icon')
   heart.addEventListener("click" , () =>{
    heart.classList.toggle("bxs-heart");
    heart.classList.toggle("heart-like");
  })
}