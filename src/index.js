gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".split-type");

splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: "chars" });
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            markers: true, // Set to true for debugging; remove for production
        },
        opacity: 0, // Start fully invisible
        // y: 20, // Move up into position
        stagger: 0.05, // Add a slight delay between each character
        duration: 1, // Optional duration for each character's animation
    });
});

gsap.fromTo(
    ".title-text",
    {
        x: -300, // Start off-screen to the left
        opacity: 0, // Start invisible
    },
    {
        x: 0, // Slide into its original position
        opacity: 1, // Fade in
        duration: 1, // Animation duration (1 second)
        scrollTrigger: {
            trigger: ".title-text", // Element to watch
            start: "bottom 80%", // Start when title-text reaches 80% of viewport
            end: "bottom 30%", // End when title-text reaches 50% of viewport
            scrub: true, // Smoothly tie animation to scroll
            markers: false, // Debug markers
        },
    }
);

gsap.fromTo(
    "#computer-image",
    {
        scale: 0.5, // Start at normal size
    },
    {
        scale: 1.1,
        scrollTrigger: {
            trigger: "#computer-image", // Element to watch
            start: "top 60%", // Start when the image is 80% down the viewport
            end: "bottom 80%", // End when the image is 50% down the viewport
            scrub: true, // Smoothly tie animation to scroll
            markers: true, // Debug markers
        },
    }
);

gsap.fromTo(
    ".sub-text",
    {
        x: 300, // Start off-screen to the right
        opacity: 0, // Start invisible
    },
    {
        x: 0, // Slide into its original position
        opacity: 1, // Fade in
        duration: 1, // Animation duration (1 second)
        scrollTrigger: {
            trigger: ".sub-text", // Element to watch
            start: "bottom center", // Start when sub-text reaches 80% of viewport
            end: "305% center", // End when sub-text reaches 50% of viewport
            scrub: true, // Smoothly tie animation to scroll
            markers: false, // Debug markers
        },
    }
);

// gsap.fromTo(
//     "#big-code-text",
//     {
//         x: -300,
//         opacity: 0,
//     },
//     {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//             trigger: "#big-code-text",
//             start: "top 50%",
//             end: "bottom bottom",
//             scrub: true,
//             markers: false,
//         },
//     }
// );

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
    console.log(e);
});




  
  