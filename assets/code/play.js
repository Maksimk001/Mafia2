anime({
    targets: 'div.fon',
    top: '-300vw',
    duration: '10000',
})
let data = localStorage.getItem("data")
let rolesObject = JSON.parse(data)



window.onload = function() {
    if (rolesObject.Mafia == 0 && rolesObject.Maniac == 0 && rolesObject.Doctor == 0 && rolesObject.Shrief == 0 && rolesObject.Mistress == 0 && rolesObject.Peaceful == 0)  {
        alert("Должна быть хотя бы одна роль")
        window.location.href = "./"
    }
}

function add_player() {
    for (let i = 0; i < rolesObject.Maniac; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                    <img class="avatar" src="./assets/image/Maniac.svg" alt="">
                    <input type="name" class="name">
                    <p>Маньяк</p>
                    <input type="text">
                    <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }

    for (let i = 0; i < rolesObject.Mafia; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                <img class="avatar" src="./assets/image/mafia.svg" alt="">
                <input type="name" class="name">
                <p>Мафия</p>
                <input type="text">
                <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }

    for (let i = 0; i < rolesObject.Doctor; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                <img class="avatar" src="./assets/image/Doctor.svg" alt="">
                <input type="name" class="name">
                <p>Доктор</p>
                <input type="text">
                <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }

    for (let i = 0; i < rolesObject.Shrief; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                <img class="avatar" src="./assets/image/Shreif.svg" alt="">
                <input type="name" class="name">
                <p>Комисар</p>
                <input type="text">
                <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }

    for (let i = 0; i < rolesObject.Mistress; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                <img class="avatar" src="./assets/image/Mistress.svg" alt="">
                <input type="name" class="name">
                <p>Любовница</p>
                <input type="text">
                <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }

    for (let i = 0; i < rolesObject.Peaceful; i++) {
        document.querySelector('p.nones').innerHTML += `
            <div class="player">
                <img class="avatar" src="./assets/image/Peaceful.svg" alt="">
                <input type="name" class="name">
                <p>Обыватель</p>
                <input type="text">
                <button class="kill"><img src="./assets/image/die.svg" alt=""></button>
            </div>
        `
    }
}
add_player()

let buttonkill = document.querySelectorAll('.kill')
let block = document.querySelectorAll('.player')
let imgblock = document.querySelectorAll('img.avatar')
let textblock = document.querySelectorAll('div.player p')
let death = document.querySelector('.death')
let resultp = document.querySelectorAll('p.number')


for (let i in buttonkill) {
    buttonkill[i].onclick = function() {
        kill_click()
    }
    function kill_click() {
        imgblock[i].fill = "#000";
        imgblock[i].src = './assets/image/death.svg'
        textblock[i].style.color = 'red'
        death.after(block[i])        
    }
}