
    $('.img-gallery').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    $('.arts_popup').magnificPopup({delegate:'a',
    type:'image',
    gallery:{
        enabled:true,
        navigateByImgClick: true    
    },
    removalDelay: 300,

    mainClass:'mfp-fade'

})







