//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

window.onload = function() {
    const pages_auth = ['sign_in', 'sign_out', 'edit']
    let curr_page = window.location.pathname.split("/").pop()
    if ( pages_auth.includes(curr_page) == true){
      check_email_input()
      transition_height()
      check_inputs_password()
    }
  };
// Проверка в поле введенного адресса эл.почты 
function check_email_input()
{
  let input = document.getElementById('input_email');
  let warning_label = document.getElementById('label_wrong_email');
  let box_email_warning = document.getElementById("box-email-warning")
  input.addEventListener('input', () => { 
    if (input.value == '') { 
      box_email_warning.style.height = "auto"
      warning_label.innerHTML = 'Email is empty!';
      toggle_submit('off'); 
      return; 
    }
    if (ValidateEmail(input.value) == false) { 
      box_email_warning.style.height = "auto"
      warning_label.innerHTML = 'Email is wrong!';
      toggle_submit('off'); 
    }
      else { 
        box_email_warning.style.height = "0px"
        warning_label.innerHTML = ' '; 
        toggle_submit('on'); 
    }
  });
}
// Проверка в полях паролей 
function check_inputs_password()
{
  let box_password_warning = document.getElementById("box-password-warning")
  let warning_label = document.getElementById('label_wrong_password');
  let user_current_password = document.getElementById('user_current_password');
  let user_password = document.getElementById('user_password');
  let user_password_confirmation = document.getElementById('user_password_confirmation');

  user_current_password.addEventListener('input', () => { 
    if (user_current_password.value == '') {
      box_password_warning.style.height = "auto" 
      warning_label.innerHTML = 'Current password is empty!';
      toggle_submit('off'); 
      return; 
    }
    else{
      box_password_warning.style.height = "0px"
      warning_label.innerHTML = ' '; 
      toggle_submit('on'); 
    }
  });
  // user_password.addEventListener('input', () => { 
  //   if (user_password.value == '') { 
  //     toggle_submit('off'); 
  //     return; 
  //   }
  // });
  // user_password_confirmation.addEventListener('input', () => { 
  //   if (user_password_confirmation.value == '') { 
  //     toggle_submit('off'); 
  //     return; 
  //   }
  // });
  //.... и т.д.
}
// Валидация электронной почты
function ValidateEmail(email) 
{
    var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(email_format)) { return (true) };
    return (false);
}
// Включение отключение кнопки подтверждения
function toggle_submit(val){
  let button_submit = document.getElementById("submit_devise");
  if (val == 'on') {
    button_submit.disabled = false
  } else { button_submit.disabled = true }
}
function transition_height(){
  let alert_div = document.querySelector('.alert-info');
  let msg_box_div = document.querySelector('.mgs-box');
  if ( alert_div ){
    // setTimeout(set_height_zero(alert_div), 100000);
    setTimeout(() => set_height_zero(msg_box_div), 1500);
    setTimeout(() => clear_block(msg_box_div), 2000);
  }
}
function set_height_zero(element){
  // let height = alert_div.offsetHeight;
  element.style.height = "0px";
  element.style.padding = "0px";
  element.style.marging = "0px";
  element.style.border = "0px";
}
function clear_block(element){
  element.innerHTML = ""
}
