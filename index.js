const btnmenu = document.getElementById("botao-sidebar")
const btnfecharmenu = document.getElementById("botao-sidebar-fechar")


var se = true

function openmenu(){
    const nav = document.getElementById("sidebar-smartphone-tablet")
    const html_name = document.getElementById("idhtml").style
    const body_name = document.getElementById("idbody").style

    if (se) {
        html_name.overflow = "hidden"
        body_name.overflow = "hidden"
        se = false
    }else{
        html_name.overflow = "auto"
        body_name.overflow = "auto"
        se = true
    }
    nav.classList.toggle("active")
}

btnmenu.addEventListener("click", openmenu)
btnfecharmenu.addEventListener("click", openmenu)
