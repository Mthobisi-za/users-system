var btn = document.querySelector('.btn');

function getData() {
    var username = document.querySelector('#name');
    var gender = document.querySelector("#gender");
    console.log(username)
    console.log(gender)
    return {
        username: username.value,
        gender: gender.value
    }
}

function printResults(username, gender) {
    document.querySelector('#name').value = '';
    document.querySelector("#gender").value = "";
    var div = document.querySelector('.div-result');
    var p = document.createElement('p');
    p.innerHTML = 'Usename:' + username + ", Gender: " + gender
    div.appendChild(p);
}

btn.addEventListener('click', () => {
    var data = getData();
    console.log(data)
    printResults(data.username, data.gender)
})