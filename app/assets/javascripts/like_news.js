function rate_news(){
   let heartIcon = document.getElementById ('heart-icon')
   if (heartIcon) {
    //const rate = getCookie('rate')
    //if (rate != 'false'){ 
      heartIcon.addEventListener("click", handleClick);
    //}
   }
}

function changeHeartIconClass(heartIcon){
  if (heartIcon.classList.contains('bxs-heart')){
    heartIcon.classList.toggle("bxs-heart", false);
    heartIcon.classList.toggle("heart-like", false);
    return -1;
  } else {
    heartIcon.classList.toggle("bxs-heart", true);
    heartIcon.classList.toggle("heart-like", true);
    return 1;
  }
}

const handleClick = async (event) => {
  const heartIcon = event.target;
  const rating = changeHeartIconClass(heartIcon);
  const news_id = getCookie('news_id')
  console.log(rating);
  try {
    const requestBody = new FormData();
    requestBody.append("rating", rating);
    requestBody.append("news_id", news_id);
    const response = await fetch('/simple_rating', {
    method: 'POST',
    body: requestBody
  });
  //console.log(response);
  } catch (error) {
  console.log(error)
  }
}

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}