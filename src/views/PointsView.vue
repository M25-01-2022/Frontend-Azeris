<template>
  <leaderboard
    title="Mejores Puntuaciones"
    icon="🏆"
    :players="players"
    type="points"
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
      points: data.points || 0
    }
  })
  players.value = players.value.sort((a,b) => b.points - a.points).slice(0,50)
})
</script>