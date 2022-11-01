const menuItems= document.getElementsByClassName('menu-item')
const checkBox = document.getElementById('my-check-box')
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',()=>{
        checkBox.checked = false
    })
    
}

const myDetail = document.getElementById('my-detail')
const myExperience =  document.getElementById('my-cercle').addEventListener('click', ()=>{
    if (myDetail.style.display !== "none") {
        myDetail.style.display = "none";
    } else {
        myDetail.style.display = "block";
    }
})


