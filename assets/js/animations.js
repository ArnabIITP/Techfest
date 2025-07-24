// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // ------------- NAVBAR SLIDE-IN ANIMATION -------------
    // Animate navbar sliding in from the top
    gsap.to('header', {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
    });

    // ------------- HERO SECTION ANIMATIONS -------------
    // Create a timeline for hero section elements
    const heroTimeline = gsap.timeline({ delay: 1 });

    // Animate hero content
    heroTimeline.from('.hero-content h1', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)'
    })
    .from('.hero-content .tagline', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.cta-group a', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.3')
    .from('.device-mockup', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.6');

    // ------------- BUTTON HOVER PULSE ANIMATION -------------
    // Button pulse animation on hover using GSAP
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power1.out',
                yoyo: true,
                repeat: 1
            });
        });
    });

    // ------------- SCROLL TRIGGERED ANIMATIONS -------------
    // 1. Feature Cards Fade In
    gsap.utils.toArray('.card').forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 50 });
        
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power3.out'
                });
            },
            once: true
        });
    });
    
    // 2. About Section Content Animation
    ScrollTrigger.create({
        trigger: '.about-content',
        start: 'top 75%',
        onEnter: () => {
            gsap.to('.about-content', {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        },
        once: true
    });

    // 3. Testimonials Animation
    ScrollTrigger.create({
        trigger: '.testimonials',
        start: 'top 70%',
        onEnter: () => {
            gsap.fromTo('.testimonials', 
                { 
                    opacity: 0, 
                    x: 50 
                }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1, 
                    ease: 'power2.out' 
                }
            );
        },
        once: true
    });

    // 4. Footer Staggered Animation
    ScrollTrigger.create({
        trigger: 'footer',
        start: 'top 80%',
        onEnter: () => {
            gsap.from('.footer-logo, .link-group, .copyright', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            });
        },
        once: true
    });
});
