let imgsLength, n

init() 
slidePlay(3000)    









function init() {
    n = 1
    imgLength = $('.images > img').length
    $('.images > img:nth-child(1)').addClass('current').siblings().addClass('enter')
}
function slidePlay(time) {
    setInterval(() => {
        makeLeave(getImage(n)).one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
        makeCurrent(getImage(n + 1))
        n += 1
    }, time)
}
function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}

function x(n) {
    if (n > imgLength) {
        n = n % imgLength
        if (n === 0) {
            n = imgLength
        }
    }
    return n
}