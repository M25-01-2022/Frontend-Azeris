<template>
  <leaderboard
    title="Mejores Tiempos"
    icon = "⏱️"
    :players="players"
    type="time"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Leaderboard from '@/components/Leaderboard.vue'

const players = ref([])
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'players'))

  players.value = querySnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      username: data.username || 'Unknown',
      bestTime: data.bestTime || 999999
    }
  })
  players.value = players.value.sort((a, b) => a.bestTime - b.bestTime).slice(0, 50)
})
</script>