<template>
  <leaderboard
    title = "Más kills"
    icon="⚔️"
    :players="players"
    type="kills"
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
      kills: data.enemiesKilled || 0
    }
  })
  players.value = players.value.sort((a, b) => b.kills - a.kills).slice(0, 50)
})
</script>