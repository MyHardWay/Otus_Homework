export function login (log_, pass_) {
  let login_ = $(log_).val()
  let passw_ = $(pass_).val()
  fetch('http://127.0.0.1:4000/login/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { 'login': login_, 'password': passw_ }) })
    .then(res => console.log(res))
}
