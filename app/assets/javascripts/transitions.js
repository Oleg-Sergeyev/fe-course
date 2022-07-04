//Функция задает высоту блока в случае если изменилась его ширина
function set_fit_content() {
  if (document.querySelector('.news-body')){
    let news_body = document.querySelector('.news-body');
    let compStyles = window.getComputedStyle(news_body);
    element = document.querySelector('.news-body')
    if (compStyles.height != "0px"){
      news_body.style.height = "fit-content";
      let current_height = news_body.offsetHeight
      news_body.style.height = current_height +'px';
    }
  }
}
//Увеличение/уменьшение высоты блока, плавное, посредством transition
function transition_height_news_body(){
  let news_body = document.querySelector('.news-body');
  let compStyles = window.getComputedStyle(news_body);
  if ( compStyles.height == "0px" ){
    let height_div = getHeight(news_body);
    // if (news_body.offsetWidth < 500){
    //   news_body.style.height = `${Math.round(height_div * 1.07)}px`;
    // }else{
      news_body.style.height = height_div + 'px';
    //}
  }else if ( compStyles.height != "0px" ) {
    news_body.style.height = "0px";
  }  
}
//Вычисление будующей высоты блока в зависимости от контента
function getHeight(e) {
  var outside = document.getElementById('outside');
  var clone = e.cloneNode(true);
  outside.appendChild(clone);
  clone.style.height = 'fit-content';
  var elHeight = outside.offsetHeight;
  outside.removeChild(clone);
  return elHeight;
}
