let isModalOpen = false
let contrastToggle = false

function toggleContrast(){
    document.body.classList += " dark-theme"
}

function contact(event){
    event.preventDefault()
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visibile"
    emailjs
        .sendForm(
            'service_gy9vjoc', 
            'template_goi76kf', 
            event.target, 
            'X0qt-ljzMULF553SN'
            ).then(() => {
                loading.classList.remove("modal__overlay--visibile")
                success.classList += " modal__overlay--visibile"
            }).catch(() => {
                loading.classList.remove("modal__overlay--visibile")
                alert("The email service is temprarily unavailable. Please contact me directly on bliberto@uci.edu")
            })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}