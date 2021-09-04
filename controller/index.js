var typed = new Typed('#proyectos', {
    strings: [
        "marca",
        "tienda en línea",
        "marca de ropa",
        "pastelería",
        "beauty shop",
        "coffee shop",
        "estudio de arquitectura",
        "tienda de accesorios"
    ],

    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
