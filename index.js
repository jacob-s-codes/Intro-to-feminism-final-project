gsap.set('.items-center > div', { y: 50, opacity: 0 });

gsap.to('.items-center > div, #allMain, .allHeaders, .buttonsAnimate, #learnStuff, #whatWeDo, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    delay: 0.5, // Delay before animation starts
    duration: 1, // Animation duration
    ease: 'power3.out' // Easing function
});