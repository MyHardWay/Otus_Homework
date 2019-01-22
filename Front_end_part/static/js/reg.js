export function register (log_, pass_, pass2_) {
    let login_ = $(log_).val();
    let passw_ = $(pass_).val();
    let passw2_ = $(pass_).val();
    console.log(
    'Login: ' + log_ + ' Password: ' + pass_ + ' Password2: ' + pass2_);
     fetch('http://127.0.0.1:4000/register/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(
            {'login': login_, 'password': passw_, 'password2': passw2_})})
            .then(res=>res.json())
            .then(res => console.log(res));



}


