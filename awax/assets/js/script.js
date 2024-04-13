let links = document.querySelectorAll('.menu li')

links.forEach((link, id)=>{
    if (id === 0){
        link.classList.add('active')
    } else{
        link.classList.remove('active')
    }
    link.addEventListener("click", ()=>{
        links.forEach((link)=>{
            link.classList.remove('active')
        })
        link.classList.add("active")
    })
})

let pointers = document.querySelectorAll('.banner .pointer')

pointers.forEach((pointer, id)=>{
    if (id === 0){
        pointer.classList.add('active')
    } else {
        pointer.classList.remove('active')   
    }
    pointer.addEventListener("click", ()=>{
        pointers.forEach((pointer)=>{
            pointer.classList.remove('active')  
        })
        pointer.classList.add("active")
    })
})

let filters = document.querySelectorAll('.section-projects--filters ul li')

filters.forEach((filter, id)=>{
    if (id === 1){
        filter.classList.add('active')
    } else {
        filter.classList.remove('active')
    }
    filter.addEventListener("click", ()=>{
        filters.forEach((filter)=>{
            filter.classList.remove("active")
        })
        filter.classList.add("active")
    })
})

let pointersTeam = document.querySelectorAll('.section-team-area .pointer')

pointersTeam.forEach((pointer, id)=>{
    if (id === 0){
        pointer.classList.add('active')
    } else {
        pointer.classList.remove('active')   
    }
    pointer.addEventListener("click", ()=>{
        pointersTeam.forEach((pointer)=>{
            pointer.classList.remove('active')  
        })
        pointer.classList.add("active")
    })
})

let pointersTestimonials = document.querySelectorAll('.section-testimonials .pointer')

pointersTestimonials.forEach((pointer, id)=>{
    if (id === 0){
        pointer.classList.add('active')
    } else {
        pointer.classList.remove('active')   
    }
    pointer.addEventListener("click", ()=>{
        pointersTestimonials.forEach((pointer)=>{
            pointer.classList.remove('active')  
        })
        pointer.classList.add("active")
    })
})

let pointersPremium = document.querySelectorAll('.section-premium .pointer')

pointersPremium.forEach((pointer, id)=>{
    if (id === 0){
        pointer.classList.add('active')
    } else {
        pointer.classList.remove('active')   
    }
    pointer.addEventListener("click", ()=>{
        pointersPremium.forEach((pointer)=>{
            pointer.classList.remove('active')  
        })
        pointer.classList.add("active")
    })
})

let openMenu = document.querySelector(".menu-opener")
let nav = document.querySelector("nav")

openMenu.addEventListener("click", ()=>{
    let computedStyle = window.getComputedStyle(nav)
    let displayValue = computedStyle.getPropertyValue('display')
    displayValue  === 'none' ? displayValue = nav.style.display = 'block' : displayValue = nav.style.display = 'none'
})

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});
  
ScrollReveal().reveal('.section-projects--photos, .section-testmonials--quoteimg, .section-companies--area, .button, .area2', { origin: 'top' });
ScrollReveal().reveal('.section-title, .section-service, .section-projects--filters, .section-testimonials--quote, .section-fact, .section-share--item', { origin: 'bottom' });
ScrollReveal().reveal('.logo, .section-aboutus--left, .section-team--name, .section-team--social, .section-testimonials--avatar, .section-testimonials--role, .section-premium--left, .footer-social', { origin: 'left' });
ScrollReveal().reveal('.menu, .section-aboutus--right, .section-team--role, .section-testimonials--name, .section-premium--right, .section-map--info, .area3', { origin: 'right' });