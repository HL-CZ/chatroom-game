<template>
  <div class="home">
   
    <video class="bg-video" :src="bgVideo" autoplay muted loop playsinline></video>
    <div class="overlay"></div>

   <!----<img class="foreground-image" :src="catImage" alt="Cat">  -->

    <LoginModal v-if="showLogin"/>
  </div>
</template>

<script setup>

import FromOneToFour from '@/components/FromOneToFour.vue'

import bgVideo from '../assets/chuanghulidemao.mp4'
//import catImage from '../assets/maomao.png'

import { ref } from 'vue'

const showLogin = ref(true)

</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
}


.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: -1; 
}


.foreground-image {
  position: relative;
  z-index: 1;
  max-width: 300px; 
  margin: 20px auto;
  display: block;
}


</style>

