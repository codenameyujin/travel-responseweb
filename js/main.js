const header = document.querySelector('header') 
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 180)
})

// 연도
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

// navlist
menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

// top scroll
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')    
}