let start = document.querySelector('button.start')
let minus = document.querySelectorAll('button.minus')
let counter = document.querySelectorAll('p.counter')
let plus = document.querySelectorAll('button.plus')
let state = false

let rolesObject = {
    "Maniac": 2,
    "Mafia": 0,
    "Doctor": 0,
    "Shrief": 0,
    "Mistress": 0,
    "Peaceful": 0
}


for (let i in counter) {
    minus[i].onclick = function() {
        minus_click()
    }
    function minus_click() {
        if (counter[i].textContent != 0) {
            counter[i].textContent = counter[i].textContent - 1
        } else {
            counter[i].textContent = 0
        }
    }

    plus[i].onclick = function() {
        plus_click()
    }
    function plus_click() {
        counter[i].textContent =+ counter[i].textContent + 1
    }
}

start.onclick = function() {
    start_click()
}
function start_click() {
        rolesObject.Maniac = counter[0].textContent
        rolesObject.Mafia = counter[1].textContent
        rolesObject.Doctor = counter[2].textContent
        rolesObject.Shrief = counter[3].textContent
        rolesObject.Mistress = counter[4].textContent
        rolesObject.Peaceful = counter[5].textContent
    console.log(rolesObject); 
    localStorage.setItem("data", JSON.stringify(rolesObject));
    window.location.href = './loading.html'
}