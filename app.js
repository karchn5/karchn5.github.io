function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 500,
        triggerElement: '.about'
    })
    .addIndicators()
    .addTo(controller);
}

splitScroll();