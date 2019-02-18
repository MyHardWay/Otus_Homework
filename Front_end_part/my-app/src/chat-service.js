export let chat_submit = (id, msg) => {
    return fetch('http://127.0.0.1:4000/sendmsg/' + this.props.id, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(
        {
            'msg': this.state.msg
        })})

}


export let load_history = (id) => {
    fetch('http://127.0.0.1:4000/gethistory/' + this.props.id, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
}

