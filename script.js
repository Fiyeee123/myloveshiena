gsap.fromTo("#heart", { scale: 0.8, opacity: 0 }, { scale: 1.1, opacity: 1, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" });

gsap.fromTo("#bouquet", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "bounce.out", delay: 1 });