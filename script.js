// Función para animar elementos cuando son visibles en la pantalla
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    const timeline_items = document.querySelectorAll('.timeline-item');
    const education_items = document.querySelectorAll('.education-item, .study-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // añadir clase para animación
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.12 });

    // Aplicar animaciones iniciales y delays escalonados
    sections.forEach((section, i) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    timeline_items.forEach((item, idx) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s cubic-bezier(.2,.9,.2,1) ${idx * 120}ms`;
        observer.observe(item);
    });

    education_items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease-out ${i * 100}ms`;
        observer.observe(item);
    });
}

// Función para añadir efectos hover a los elementos de contacto
function addContactHoverEffects() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.color = '#ff6e40';
            item.querySelector('i').style.transform = 'scale(1.2)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.color = '';
            item.querySelector('i').style.transform = 'scale(1)';
        });

        // Añadir transiciones suaves
        item.style.transition = 'all 0.3s ease';
        item.querySelector('i').style.transition = 'all 0.3s ease';
    });
}

// Función para inicializar todas las animaciones y efectos
function initializeAnimations() {
    animateOnScroll();
    addContactHoverEffects();
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeAnimations);

// CTA button behavior and small tilt effect for profile image
document.addEventListener('DOMContentLoaded', () => {
    // Crear contenedor de CTA con botones de correo y WhatsApp si no existe
    if (!document.querySelector('.cta-container')) {
        const container = document.createElement('div');
        container.className = 'cta-container';

    const emailBtn = document.createElement('button');
    emailBtn.className = 'cta-button cta-email';
    emailBtn.innerHTML = '<i class="fas fa-envelope cta-icon" aria-hidden="true"></i><span>Contacto</span>';

    container.appendChild(emailBtn);
        document.body.appendChild(container);

        // Obtener email del header
        const emailSpan = document.querySelector('.contact-info .contact-item:nth-child(3) span');
        const email = emailSpan ? emailSpan.textContent.trim() : 'correo@ejemplo.com';

        emailBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Abrir mailto en nueva pestaña sin navegar desde el CV
            const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Interés en tu perfil')}`;
            window.open(mailto, '_blank');
        });

        

        // Aparecer con delay sutil
        container.style.opacity = '0';
        container.style.transition = 'opacity 600ms ease 800ms, transform 600ms ease';
        setTimeout(() => { container.style.opacity = '1'; }, 900);
    }

    // Small tilt on profile image following pointer (subtle)
    const profile = document.querySelector('.profile-image');
    if (profile) {
        profile.classList.add('tilt');
        profile.addEventListener('mousemove', (e) => {
            const rect = profile.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            profile.style.transform = `rotateX(${ -y * 4 }deg) rotateY(${ x * 6 }deg)`;
        });
        profile.addEventListener('mouseleave', () => { profile.style.transform = 'rotateX(0) rotateY(0)'; });
    }
});

