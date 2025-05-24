// accordion button on the faq section
const accordions = document.querySelectorAll('.faq-acc-btn');

accordions.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('.toggle-icon');
        const isCollapsed = btn.classList.contains('collapsed');

        if (isCollapsed) {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on card index
                setTimeout(() => {
                    entry.target.classList.add('cardAnimated');
                }, index * 200); // 200ms delay between each card
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of element is visible
    });

    // Observe all program feature cards
    document.querySelectorAll('.program-feature-card').forEach(card => {
        observer.observe(card);
    });
});



// stepper function
function showContent(index) {
    document.querySelectorAll('.stepper-content-box').forEach((box, i) => {
        box.classList.toggle('active', i === index);
    });
}

// scroll certified logo
document.addEventListener('DOMContentLoaded', () => {
    const certTag = document.querySelector('.course-cert-tag');

    if (!certTag) return; // prevent error if not found

    window.addEventListener('scroll', () => {
        const scrolly = window.scrollY;
        const rotationDeg = Math.min(scrollY * 0.2, 360);
;

        // Add 'deg' here
        certTag.style.transform = `rotate(${rotationDeg}deg)`;
    });
})