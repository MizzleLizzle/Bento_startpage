let apiURL= 'https://ipinfo.io/json'
const displayIP=async()=>{
    let IPData= await fetch(apiURL).then(j=>j.json())
    document.getElementById('ip').innerText = IPData;
}

window.onload = displayIP();

