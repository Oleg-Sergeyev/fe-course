//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

window.onload = function() {
    const pages_auth = ['sign_in', 'sign_out']
    let curr_page = window.location.pathname.split("/").pop()
    if ( pages_auth.includes(curr_page) == true){
      check_email_input()
    }
  };
// Проверка в поле введенного адресса эл.почты 
function check_email_input()
{
  let input = document.getElementById('input_email');
  let warning_label = document.getElementById('label_wrong_email');
  input.addEventListener('input', () => { 
    if (input.value == '') { warning_label.innerHTML = ' '; toggle_submit('off'); return; }
    if (ValidateEmail(input.value) == false) { 
      warning_label.innerHTML = 'Wrong_email!';
      toggle_submit('off'); 
    }
      else{ warning_label.innerHTML = ' '; 
      toggle_submit('on'); 
    }
  });
}
// Валидация электронной почты
function ValidateEmail(mail) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat)) { return (true) };
    return (false);
}
// Включение отключение кнопки подтверждения
function toggle_submit(val){
  let button_submit = document.getElementById("submit_log_in");
  if (val == 'on') {
    button_submit.disabled = false
  } else { button_submit.disabled = true }
}