<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="custom-tabs">
        <ion-tab-button tab="points" href="/azeris/points">
          <div class="tab-content">
            <img src="/images/trophy.png" class="tab-image" />
            <span>🏆 Puntos</span>
          </div>
        </ion-tab-button>

        <ion-tab-button tab="kills" href="/azeris/kills">
          <div class="tab-content">
            <img src="/images/sword.png" class="tab-image" />
            <span>⚔ Kills</span>
          </div>
        </ion-tab-button>

        <ion-tab-button tab="time" href="/azeris/time">
          <div class="tab-content">
            <img src="/images/hourglass.png" class="tab-image" />
            <span>⏱ Tiempo</span>
          </div>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
</script>

<style scoped>
.custom-tabs {
  --background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 10px;
  height: 90px;
  backdrop-filter: blur(10px);
}

.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.25s ease;
}

.tab-content:hover {
  transform: translateY(-4px);
}

.tab-image {
  width: 38px;
  height: 38px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.4));
}

ion-tab-button {
  --color: #94a3b8;
  --color-selected: #facc15;
  font-weight: 700;
}

ion-tab-button.tab-selected .tab-image {
  transform: scale(1.15);
  filter:
    drop-shadow(0 0 15px #facc15)
    brightness(1.2);
}

ion-tab-button span {
  font-size: 0.85rem;
}
</style>