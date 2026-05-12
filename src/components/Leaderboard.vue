<template>
    <ion-page>
        <ion-content class="leaderboard-page">
            <div class="hero">
                <div class="hero-overlay"></div>
                <h1 class="title">{{ icon }} {{ title }}</h1>
            </div>

            <div class="podium" v-if="players.length >= 3">
                <div class="podium-card silver">
                    <div class="medal">🥈</div>
                    <h2>{{ players[1]?.username }}</h2>
                    <p>{{ format(players[1]) }}</p>
                </div>
                <div class="podium-card gold">
                    <div class="medal">🥇</div>
                    <h2>{{ players[0]?.username }}</h2>
                    <p>{{ format(players[0]) }}</p>
                </div>
                <div class="podium-card bronze">
                    <div class="medal">🥉</div>
                    <h2>{{ players[2]?.username }}</h2>
                    <p>{{ format(players[2]) }}</p>
                </div>
            </div>

            <div class="ranking-container">
                <div v-for="(player, index) in players" :key="player.username" class="ranking-card">
                    <div class="position"> {{ position(index) }} </div>
                    <div class="player-info">
                        <h2>{{ player.username }}</h2>
                        <p>{{ format(player) }}</p>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue'

const props = defineProps({
    title: String,
    icon: String,
    players: Array,
    type: String
})

function position(index) {
    if (index === 0) return '🥇'
    if (index === 1) return '🥈'
    if (index === 2) return '🥉'
    return `#${index + 1}`
}

function format(player) {
    if (props.type === 'points') {
        return `${player.points} puntos`
    }
    if (props.type === 'kills') {
        return `${player.kills} kills`
    }
    if (props.type === 'time') {
        if (player.bestTime === 999999) {
            return 'No completado'
        }
        const mins = Math.floor(player.bestTime / 60)
        const secs = player.bestTime % 60
        return `${mins}m ${secs}s`
    }
}
</script>

<style scoped>
.leaderboard-page {
    --background:
        radial-gradient(circle at top,
            #1f2937 0%,
            #0f172a 45%,
            #020617 100%);
    color: white;
}

.hero {
    position: relative;
    text-align: center;
    padding: 60px 20px 30px;
}


.title {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #facc15, #fb7185);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.podium {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 12px;
    padding: 20px;
}

.podium-card {
    width: 110px;
    border-radius: 20px;
    text-align: center;
    padding: 20px 10px;
    backdrop-filter: blur(12px);
    background: rgba(255,255,255,0.08);
    box-shadow:0 10px 30px rgba(0,0,0,0.35);
    transition: 0.3s ease;
}

.podium-card:hover {
    transform: translateY(-5px);
}

.gold {
    height: 180px;
    border: 2px solid #facc15;
}

.silver {
    height: 150px;
    border: 2px solid #cbd5e1;
}

.bronze {
    height: 130px;
    border: 2px solid #fb923c;
}

.medal {
    font-size: 2rem;
    margin-bottom: 10px;
}

.podium-card h2 {
    font-size: 1rem;
    margin-bottom: 8px;
}

.podium-card p {
    color: #cbd5e1;
    font-size: 0.9rem;
}

.ranking-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.ranking-card {
    display: flex;
    align-items: center;
    gap: 18px; 
    padding: 18px; 
    border-radius: 18px;   
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.08);  
    transition: 0.25s ease;
}

.ranking-card:hover {
    transform: scale(1.02);
    background: rgba(255,255,255,0.12);
}

.position {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #334155, #1e293b);
    font-size: 1.2rem;
    font-weight: bold;
}

.player-info h2 {
    margin: 0;
    font-size: 1.1rem;
}

.player-info p {
    margin-top: 5px;
    color: #94a3b8;
}
</style>