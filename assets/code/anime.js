setTimeout(start, 500)


function start() {
    anime({
        targets: '.logo',
        width: '100%',
        easing: 'easeInOutQuad',
        duration: 3000,
        
    })
    setTimeout(link, 3500)  
}

function link() {
    window.location.href = './game.html';
}
