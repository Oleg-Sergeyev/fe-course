export const get_current_user = () => {
  let username = ''
  fetch("/api/v1/current_user")
        .then(res => res.json())
        .then(
          (result) => {
            username = result.name
            //console.log('result.name ', result.name)
            localStorage.clear;
            localStorage.setItem("username", result.name);
            localStorage.setItem("like", result.simple_rating);
            // this.setState({
            //   isLoaded: true,
            //   items: result.items
            // });
          },
          (error) => {
            // this.setState({
            //   isLoaded: true,
            //   error
            // });
          }
        )
    
  }

export const log_out = () => {
  fetch("/api/v1/sign_out")
      .then(res => res.json())
      .then(
        (result) => {
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
          console.log('logout succses');
          localStorage.clear;
          localStorage.setItem("username", "guest");
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )

  return "guest";
}

export const log_in = (data) => {
  localStorage.setItem("token", document.querySelector('meta[name="csrf-token"]').content)
  const token = localStorage.getItem("token");

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
