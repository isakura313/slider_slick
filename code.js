
$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
    adaptiveHeight: true

    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 1,
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     }
    // ]
});

$('.arts_popup').magnificPopup({delegate:'a',
    type:'image',
    gallery:{
        enabled:true,
        navigateByImgClick: true
    },
    removalDelay: 300,

    mainClass:'mfp-fade'
});