const menuItems= document.getElementsByClassName('menu-item')
const checkBox = document.getElementById('my-check-box')
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',()=>{
        checkBox.checked = false
    })
    
}

