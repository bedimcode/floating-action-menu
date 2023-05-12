/*=============== SHOW & HIDE MENU ===============*/
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () =>{
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', activeMenu)