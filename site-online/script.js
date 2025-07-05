// Script ultra-simples para o site Richstyle

console.log('🚀 Script carregado!');

// ANIMAÇÃO DO TÍTULO
let rev = "fwd";
let timer;

function titlebar(val) {
    var msg = "HIHIHIHIHIH";
    var speed = 200;
    var pos = val;
    var le = msg.length;
    
    if (rev == "fwd") {
        if (pos < le) {
            pos = pos + 1;
            scroll = msg.substr(0, pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        } else {
            rev = "bwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    } else {
        if (pos > 0) {
            pos = pos - 1;
            var ale = le - pos;
            scrol = msg.substr(ale, le);
            document.title = scrol;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        } else {
            rev = "fwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
}

// ENTRADA DO SITE
function enterSite() {
    console.log('Entrando no site...');
    
    const entryScreen = document.getElementById('entryScreen');
    const mainContent = document.getElementById('mainContent');
    
    if (!entryScreen || !mainContent) {
        console.error('Elementos não encontrados!');
        return;
    }
    
    entryScreen.classList.add('fade-out');
    
    setTimeout(() => {
        entryScreen.style.display = 'none';
        mainContent.classList.add('show');
        console.log('Site aberto!');
        
        // Inicia música
        if (window.player && window.player.playVideo) {
            window.player.playVideo();
            window.isMusicPlaying = true;
            updateMusicButton();
        }
        
        // Configura animações
        setTimeout(setupAnimations, 500);
    }, 800);
}

// MÚSICA
let player;
let isMusicPlaying = false;

function toggleMusic() {
    console.log('Toggle música chamado');
    
    if (!player) {
        console.log('Player não está pronto');
        return;
    }
    
    try {
        if (isMusicPlaying) {
            player.pauseVideo();
            console.log('Música pausada');
        } else {
            player.playVideo();
            console.log('Música tocando');
        }
        updateMusicButton();
    } catch (error) {
        console.error('Erro na música:', error);
    }
}

function updateMusicButton() {
    const musicButton = document.getElementById('musicButton');
    const musicIcon = document.getElementById('musicIcon');
    
    if (!musicButton || !musicIcon) {
        console.log('Botão de música não encontrado');
        return;
    }
    
    if (isMusicPlaying) {
        musicIcon.className = 'fas fa-pause';
        musicButton.classList.remove('muted');
    } else {
        musicIcon.className = 'fas fa-play';
        musicButton.classList.add('muted');
    }
}

// YOUTUBE PLAYER
function onYouTubeIframeAPIReady() {
    console.log('YouTube API carregada!');
    player = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    window.player = player;
}

function onPlayerReady(event) {
    console.log('YouTube Player pronto!');
    player.setVolume(6);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isMusicPlaying = true;
        window.isMusicPlaying = true;
        updateMusicButton();
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        isMusicPlaying = false;
        window.isMusicPlaying = false;
        updateMusicButton();
    }
}

// ANIMAÇÕES
function setupAnimations() {
    console.log('Configurando animações...');
    const cards = document.querySelectorAll('.profile-card');
    
    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / centerY * 15;
            const rotateY = (x - centerX) / centerX * 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'perspective(1000px) scale(1.05)';
        });
    });
}

// CARREGA YOUTUBE API
if (!window.YT) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado!');
    
    // Inicia animação do título
    titlebar(0);
    
    // Configura entrada do site
    const enterText = document.getElementById('enterText');
    if (enterText) {
        enterText.addEventListener('click', enterSite);
        enterText.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enterSite();
            }
        });
        console.log('Entrada configurada');
    } else {
        console.error('Elemento enterText não encontrado!');
    }
    
    // Configura botão de música
    const musicButton = document.getElementById('musicButton');
    if (musicButton) {
        musicButton.addEventListener('click', toggleMusic);
        console.log('Botão de música configurado');
    } else {
        console.error('Botão de música não encontrado!');
    }
    
    // Tecla espaço
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            toggleMusic();
        }
    });
    
    console.log('Site inicializado!');
});

// Funções globais para debug
window.enterSite = enterSite;
window.toggleMusic = toggleMusic;
window.titlebar = titlebar; 