<template>
    <ion-page>
        <ion-content class="home-page">
            <NavigationBar />
            <section class="hero-section">
                <div class="hero-left">
                    <div class="badges">
                        <span>⚔️ RPG ACTION</span>
                        <span>🟢 PIXEL ART</span>
                        <span>💻 GRATIS</span>
                    </div>
                    <img class="azeris-logo" src="/images/azeris.png" alt="Azeris Logo"/>
                    <p class="hero-description">
                        Explora una dungeon laberintica llena de enemigos,
                        mejora tus estadísticas
                        y supera los rankings globales en Azeris.
                    </p>
                    <div class="hero-buttons">
                        <ion-button 
                        class="play-btn"
                        href="/downloads/AzerisWindowsVer.zip"
                        target="_blank">
                            Descargar para Windows
                        </ion-button>
                    
                        <!-- LINK DESCARGA LINUX -->
                        <ion-button 
                            class="linux-btn"
                            href="/downloads/AzerisUbuntuVer.zip"
                            target="_blank">
                            Descargar para Linux
                        </ion-button>

                        <ion-button 
                            fill="outline" 
                            class="ranking-btn"
                            @click="$router.push('/azeris/points')">
                            🏆 Ver Rankings
                        </ion-button>
                            <ion-button
                            class="itch-btn"
                            href="https://ackxqman.itch.io/azeris"
                            target="_blank">
                            🎮 Página Oficial
                        </ion-button>
                    </div>
                    <div class="platforms">
                        Disponible para Windows y Linux
                    </div>
                </div>
                <div class="hero-right">
                    <div class="game-preview">
                        <img src="/images/menu-preview.png" alt="Azeris gameplay"/>
                    </div>
                </div>
            </section>
            <section class="stats-section">
                <div class="stat-card">
                    <h2>WIN + LINUX</h2>
                    <p>PLATAFORMAS</p>
                </div>
                <div class="stat-card">
                    <h2>100%</h2>
                    <p>GRATIS</p>
                </div>
                <div class="stat-card">
                    <h2>2026</h2>
                    <p>AÑO</p>
                </div>
                <div class="stat-card">
                    <h2>2</h2>
                    <p>DESARROLLADORES</p>
                </div>
            </section>
            <section class="about-section">
                <div class="about-container">
                    <div class="about-left">
                        <span class="section-mini">
                            • AVENTURA
                        </span>
                        <h2>
                            UN MUNDO
                            <br>
                            LLENO DE PELIGROS
                        </h2>
                    </div>
                    <div class="about-right">
                        <p>
                            Azeris, videojuego con estilo pixel art
                            donde obtienes enfrentamintos a enemigos variados,
                            exploración de escenarios variados y 
                            experiencias gratificantes.
                        </p>
                        <p>
                            Compite en rankings online, consigue
                            la mayor puntuación y conviértete
                            en el mejor jugador del mundo.
                        </p>
                    </div>
                </div>
            </section>
            <section class="features-section">
                <div class="controls-title">
                    <span>• EL JUEGO</span>
                    <h2>
                        DE QUE SE TRATA
                        <br>
                        NUESTRO JUEGO
                    </h2>
                </div>
                <div class="feature-card">
                    <h3>⚔️ Gameplay desafiante</h3>
                    <p> Enfrentamiento con diversos enemigos y escenarios variados.</p>
                </div>
                <div class="feature-card">
                    <h3>🏆 Rankings online</h3>
                    <p> Competición con otros jugadores por el podio. </p>
                </div>
                <div class="feature-card">
                    <h3>🕹️ Estilo retro</h3>
                    <p> Pixel art y ambiente arcade. </p>
                </div>
            </section>
            <section class="controls-section">
                <div class="controls-title">
                    <span>• CONTROLES</span>
                    <h2>
                        TODO LO QUE NECESITAS
                        <br>
                        PARA JUGAR
                    </h2>
                </div>
                <div class="controls-container">
                    <div class="control-card">
                        <div class="key-group">
                            <div class="key">←</div>
                            <div class="key">A</div>
                        </div>
                        <div class="control-info">
                            <h3>Moverse izquierda</h3>
                            <p>Flecha izquierda o tecla A</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key-group">
                            <div class="key">→</div>
                            <div class="key">D</div>
                        </div>
                        <div class="control-info">
                            <h3>Moverse derecha</h3>
                            <p>Flecha derecha o tecla D</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key-group">
                            <div class="key">↑</div>
                            <div class="key">W</div>
                        </div>
                        <div class="control-info">
                            <h3>Moverse arriba</h3>
                            <p>Flecha arriba o tecla W</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key-group">
                            <div class="key">↓</div>
                            <div class="key">S</div>
                        </div>
                        <div class="control-info">
                            <h3>Moverse abajo</h3>
                            <p>Flecha abajo o tecla S</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key big-key">CLICK IZQ</div>
                        <div class="control-info">
                            <h3>Atacar</h3>
                            <p>Usa tu ataque principal</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key big-key">SHIFT</div>
                        <div class="control-info">
                            <h3>Sprint</h3>
                            <p>Mantén pulsado para correr</p>
                        </div>
                    </div>
                    <div class="control-card">
                        <div class="key big-key">SCAPE</div>
                        <div class="control-info">
                            <h3>Pausar</h3>
                            <p>Pausa el juego en cualquier momento</p>
                        </div>
                    </div>
                </div>
            </section>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import NavigationBar from '../components/NavigationBar.vue'
</script>

<style scoped>
.home-page {
    --background: #090e0b;
    background:
        linear-gradient(
        90deg,
        rgba(26,255,124,0.03) 1px,
        transparent 1px);
}

.hero-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 100px;
}

.hero-left {
    flex: 1;
}

.hero-description {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #9fdcb8;
    max-width: 700px;
    margin-top: 10px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.azeris-logo {
    width: 400px;
    margin-bottom: 30px;
    image-rendering: pixelated;
    filter:
        drop-shadow(0 0 12px rgba(26,255,124,0.4))
        drop-shadow(0 0 40px rgba(26,255,124,0.2));
}

.play-btn {
    --background: #19d66b;
    --color: #04110a;
    font-weight: 900;
    height: 58px;
    --border-radius: 18px;
    font-size: 1rem;
    box-shadow:0 0 20px rgba(26,255,124,0.25);
}

.linux-btn {
    --background: #13251b;
    --color: #7affb2;
    height: 58px;
    --border-radius: 18px;
    border: 1px solid rgba(122,255,178,0.2);
}

.ranking-btn {
    --border-color: #19d66b;
    --color: #7affb2;
    height: 58px;
    --border-radius: 18px;
}

.itch-btn {
    --background: #4da047;
    --color: white;
    height: 58px;
    --border-radius: 18px;
    font-weight: 800;
    box-shadow: 0 0 20px rgba(250,92,92,0.18);
    transition: 0.25s ease;
}

.itch-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(250,92,92,0.3);
}

.badges {
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
}

.badges span {
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 999px;
    padding: 8px 16px;
    font-size: 0.8rem;
    background: rgba(255,255,255,0.04);
}

.platforms {
    margin-top: 30px;
    color: #6b7280;
}


.game-preview {
    overflow: hidden;
    border-radius: 30px;
    border: 2px solid rgba(26,255,124,0.2);
    box-shadow: 0 0 50px rgba(26,255,124,0.15);
    background: #0b120f;
}

.game-preview img {
    display: block;
}

.about-container {
    justify-content: space-between;
}

.stats-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 40px 80px;
}

.stat-card {
    background: rgba(10,20,14,0.95);
    border: 1px solid rgba(26,255,124,0.1);
    border-radius: 24px;
    text-align: center;
    padding: 50px 20px;
    transition: 0.25s;
}

.stat-card:hover {
    transform: translateY(-6px);
    border-color: rgba(26,255,124,0.35);
    box-shadow: 0 0 20px rgba(26,255,124,0.08);
}

.stat-card h2 {
    color: #9fdcb8;
    font-size: 2rem;
    margin-bottom: 10px;
}

.stat-card p {
    color: #6b7280;
    letter-spacing: 2px;
}
.features-section {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 40px 80px 100px;
}

.feature-card {
    background: rgba(12,18,15,0.95);
    border: 1px solid rgba(26,255,124,0.08);
    border-radius: 24px;
    padding: 45px;
    transition: 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-6px);
    border-color: rgba(26,255,124,0.3);
    box-shadow: 0 0 25px rgba(26,255,124,0.08);
}

.feature-card p {
    color: #9ca3af;
}

.about-section {
    padding: 100px 80px;
}

.about-container {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    max-width: 1400px;
    margin: auto;
}

.about-left {
    flex: 1;
}

.about-right {
    flex: 1;
    color: #9ca3af;
    font-size: 1.1rem;
    line-height: 1.8;
}

.controls-section {
    padding: 80px;
}

.controls-title {
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
}

.controls-title span, .section-mini {
    color: #19d66b;
    letter-spacing: 2px;
    font-weight: 600;
}

.controls-title h2, .about-left h2 {
    font-size: 3rem;
    line-height: 0.9;
    font-weight: 600;
}

.controls-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
}

.control-card {
    display: flex;
    align-items: center;
    gap: 25px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 24px 30px;
    transition: 0.25s ease;
}

.control-card:hover {
    transform: translateY(-4px);
    border-color: rgba(250,204,21,0.3);
    background: rgba(255,255,255,0.05);
}

.key-group {
    display: flex;
    gap: 10px;
}

.key {
    background:
        linear-gradient(
            180deg,
            #173322,
            #0c1812
        );
    border: 1px solid rgba(122,255,178,0.15);
    color: #7affb2;
}

.big-key {
    min-width: 100px;
}

.control-info p {
    color: #8b8b8b;
}

@media (max-width: 1100px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
        padding: 50px 25px;
    }
    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
    }
    .azeris-logo {
        width: 300px;
    }
    .stats-section, .features-section {
        grid-template-columns: 1fr;
        padding: 20px;
    }
    .features-section {
        flex-direction: column;
    }
    .about-section {
        padding: 60px 25px;
    }
    .about-container {
        flex-direction: column;
        gap: 30px;
    }
    .game-preview {
        width: 100%;
    }
    .controls-section {
        padding: 60px 25px;
    }
    .controls-title h2, .about-left h2 {
        font-size: 2.2rem;
        line-height: 1.1;
    }
}
</style>