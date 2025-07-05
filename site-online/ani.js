// Animação Tilt Ultra-Simples
console.log('ani.js carregado!');

// Função simples de tilt
window.applyTiltEffect = function(element) {
    console.log('Aplicando tilt em:', element);
    
    // Remove qualquer transição CSS que possa interferir
    element.style.transition = 'none';
    element.style.animation = 'none';
    
    element.addEventListener('mousemove', function(e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (centerY - y) / centerY * 15;
        const rotateY = (x - centerX) / centerX * 15;
        
        // Força a aplicação do transform
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) !important`;
        console.log('Tilt aplicado:', rotateX, rotateY);
    });
    
    element.addEventListener('mouseleave', function() {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) !important';
        console.log('Tilt resetado');
    });
    
    element.addEventListener('mouseenter', function() {
        element.style.transform = 'perspective(1000px) scale(1.05) !important';
        console.log('Mouse entrou no elemento');
    });
};

// Inicialização automática
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, procurando elementos com data-tilt...');
    
    const tiltElements = document.querySelectorAll('[data-tilt]');
    console.log('Encontrados:', tiltElements.length, 'elementos com data-tilt');
    
    tiltElements.forEach(function(element, index) {
        console.log('Aplicando tilt no elemento', index + 1);
        applyTiltEffect(element);
    });
    
    if (tiltElements.length > 0) {
        alert('Tilt Animation aplicada em ' + tiltElements.length + ' elementos!');
    }
});

// Função global para inicialização manual
window.initTiltAnimation = function() {
    console.log('Inicialização manual chamada');
    
    const tiltElements = document.querySelectorAll('[data-tilt]');
    console.log('Encontrados:', tiltElements.length, 'elementos para tilt manual');
    
    tiltElements.forEach(function(element, index) {
        console.log('Aplicando tilt manual no elemento', index + 1);
        applyTiltEffect(element);
    });
    
    alert('Tilt Animation manual aplicada em ' + tiltElements.length + ' elementos!');
};

// Inicialização adicional após um delay
setTimeout(function() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length > 0) {
        console.log('Inicialização tardia - aplicando tilt em', tiltElements.length, 'elementos');
        tiltElements.forEach(function(element, index) {
            applyTiltEffect(element);
        });
    }
}, 2000);

// Inicialização extra agressiva
setTimeout(function() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length > 0) {
        console.log('Inicialização extra agressiva - aplicando tilt em', tiltElements.length, 'elementos');
        tiltElements.forEach(function(element, index) {
            // Força a remoção de qualquer CSS que possa interferir
            element.style.transition = 'none';
            element.style.animation = 'none';
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            
            applyTiltEffect(element);
        });
    }
}, 3000);