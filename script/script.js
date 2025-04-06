// Owl Carousel JS for Portfolio 

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:3
        }
    }
})

// AOS Animation JS 

AOS.init();

