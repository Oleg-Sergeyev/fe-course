const token = document.querySelector('meta[name="csrf-token"]').content;

export const log_out = () => {
  fetch('/api/v1/sign_out', 
       { method: 'DELETE', 
         headers: {
           'X-CSRF-Token': token,
           'Content-Type': 'application/json'
         } 
        });
  console.log('LOG OUT');
  localStorage.setItem("username", "guest");
  return "guest";
}

export const log_in = (data) => {
  let message = ''
  fetch('/api/v1/sign_in', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => { 
      if (response.error) {
        message = response.error
        console.log('LOG ERROR')
      }
      else {
        localStorage.setItem("username", data.user.username);
        console.log('LOG IN');
        message = "login succses";
        console.log(message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      message = error;
    });
    console.log(message);
    return message
}
