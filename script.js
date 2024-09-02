document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sample event data
    const events = [
        { title: 'AI Ethics Hackathon', date: 'May 15, 2024', description: 'Develop AI solutions with a focus on ethical considerations.' },
        { title: 'Quantum Computing Workshop', date: 'June 1, 2024', description: 'Explore the fundamentals of quantum computing and its applications.' },
        { title: 'Cybersecurity Challenge', date: 'June 15, 2024', description: 'Test your skills in our annual cybersecurity competition!' },
        { title: 'Data Science Symposium', date: 'July 1-5, 2024', description: 'A week-long deep dive into the latest data science techniques.' }
    ];

    const eventList = document.getElementById('event-list');
    const loadMoreBtn = document.getElementById('load-more-events');
    let eventsShown = 2;

    function renderEvents() {
        eventList.innerHTML = '';
        for (let i = 0; i < eventsShown && i < events.length; i++) {
            const event = events[i];
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>${event.description}</p>
            `;
            eventList.appendChild(eventCard);
            
            // Animate card entrance
            gsap.from(eventCard, {
                duration: 0.5,
                opacity: 0,
                y: 20,
                delay: i * 0.1
            });
        }

        loadMoreBtn.style.display = eventsShown >= events.length ? 'none' : 'block';
    }

    loadMoreBtn.addEventListener('click', () => {
        eventsShown += 2;
        renderEvents();
    });

    renderEvents();

    // Sample team data
    const team = [
        { name: 'Alice Johnson', role: 'President', image: 'https://via.placeholder.com/100' },
        { name: 'Bob Smith', role: 'Vice President', image: 'https://via.placeholder.com/100' },
        { name: 'Carol Williams', role: 'Secretary', image: 'https://via.placeholder.com/100' },
        { name: 'David Brown', role: 'Treasurer', image: 'https://via.placeholder.com/100' }
    ];

    const teamGrid = document.getElementById('team-grid');

    team.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-member');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamGrid.appendChild(memberCard);

        // Animate card entrance
        gsap.from(memberCard, {
            duration: 0.5,
            opacity: 0,
            y: 20,
            delay: index * 0.1
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Glitch effect for the title
    const glitchElement = document.querySelector('.glitch-effect');
    setInterval(() => {
        glitchElement.style.animation = 'none';
        void glitchElement.offsetWidth; // Trigger reflow
        glitchElement.style.animation = null;
    }, 3000);
});