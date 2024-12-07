// Heart animation using GSAP
gsap.fromTo("#heart", { scale: 1 }, { scale: 1.3, repeat: -1, yoyo: true, duration: 1.5, ease: "sine.inOut" });

// Bouquet floating animation
gsap.to("#bouquet", {
    opacity: 1,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "ease-in-out",
    delay: 2
});
