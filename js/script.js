// ===== NAVEGAÇÃO SUAVE =====
// Quando clicamos em um link do menu, rola suavemente até a seção
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Rola suavemente até o elemento
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== EFEITO DE PARALAXE NO HERO =====
// Cria um efeito onde elementos se movem em velocidades diferentes durante o scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .magic-circle');
    
    parallaxElements.forEach(element => {
        const speed = 0.5; // Velocidade do efeito (quanto menor, mais lento)
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== ANIMAÇÃO DE APARIÇÃO DOS ELEMENTOS =====
// Elementos aparecem quando entram na tela (scroll reveal)
const observerOptions = {
    threshold: 0.1, // Elemento precisa estar 10% visível para ativar
    rootMargin: '0px 0px -50px 0px' // Margem para ativar antes do elemento ficar totalmente visível
};

// Função que será executada quando um elemento entra na tela
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'animate' quando o elemento fica visível
            entry.target.classList.add('animate');
        }
    });
};

// Cria o observador
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observa todos os elementos que queremos animar
document.querySelectorAll('.feature, .service-card, .section-title').forEach(el => {
    observer.observe(el);
});

// ===== EFEITO DE DIGITAÇÃO NO TÍTULO =====
// Simula o efeito de texto sendo digitado letra por letra
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplica o efeito quando a página carrega
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// ===== VALIDAÇÃO DO FORMULÁRIO =====
// Valida e envia o formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Pega os valores dos campos
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    
    // Validações simples
    if (!name) {
        showNotification('Por favor, digite seu nome', 'error');
        return;
    }
    
    if (!email || !isValidEmail(email)) {
        showNotification('Por favor, digite um email válido', 'error');
        return;
    }
    
    if (!message) {
        showNotification('Por favor, digite uma mensagem', 'error');
        return;
    }
    
    // Se chegou até aqui, os dados são válidos
    showNotification('Mensagem enviada com sucesso! 🚀', 'success');
    
    // Limpa o formulário
    this.reset();
});

// Função para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== SISTEMA DE NOTIFICAÇÕES =====
// Mostra mensagens de sucesso ou erro para o usuário
function showNotification(message, type = 'info') {
    // Remove notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Cria a notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Adiciona estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        backgroundColor: type === 'success' ? '#00ff88' : 
                        type === 'error' ? '#ff4444' : '#6a0dad'
    });
    
    // Adiciona ao documento
    document.body.appendChild(notification);
    
    // Anima a entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove após 4 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// ===== EFEITOS DE PARTÍCULAS MÁGICAS =====
// Cria um efeito de partículas flutuantes no background
function createMagicParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    
    // Posição aleatória
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Estilos da partícula
    Object.assign(particle.style, {
        position: 'fixed',
        left: x + 'px',
        top: y + 'px',
        width: '4px',
        height: '4px',
        background: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '1',
        boxShadow: '0 0 10px currentColor',
        animation: `floatParticle ${5 + Math.random() * 10}s linear infinite`
    });
    
    document.body.appendChild(particle);
    
    // Remove a partícula após a animação
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 15000);
}

// Adiciona a animação CSS para as partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// ===== MENU RESPONSIVO =====
// Para telas menores, adiciona funcionalidade de menu hamburger
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Cria o botão hamburger
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    
    Object.assign(hamburger.style, {
        display: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#00ffff'
    });
    
    navbar.appendChild(hamburger);
    
    // Toggle do menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Responsividade
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navMenu.style.display = navMenu.classList.contains('active') ? 'flex' : 'none';
        } else {
            hamburger.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// ===== INICIALIZAÇÃO =====
// Executa todas as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    
    // Inicia as partículas após um delay
    setTimeout(createMagicParticles, 2000);
    
    // Cria novas partículas periodicamente
    setInterval(createParticle, 3000);
});

// ===== EFEITO DE CURSOR MÁGICO =====
// Adiciona um rastro mágico ao cursor
document.addEventListener('mousemove', (e) => {
    // Cria um elemento de rastro
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    
    Object.assign(trail.style, {
        position: 'fixed',
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        width: '6px',
        height: '6px',
        background: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9998',
        boxShadow: '0 0 10px currentColor',
        transform: 'translate(-50%, -50%)',
        animation: 'fadeOut 1s ease-out forwards'
    });
    
    document.body.appendChild(trail);
    
    // Remove após a animação
    setTimeout(() => {
        if (trail.parentNode) {
            trail.remove();
        }
    }, 1000);
});

// Adiciona a animação de fade out
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
document.head.appendChild(cursorStyle);
