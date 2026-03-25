<script setup>
    import chatForm from '@/components/ChatForm.vue'
    import chatBox from '@/components/ChatBox.vue'
    import lobbySelect from '@/components/LobbySelect.vue'

    import { inject } from 'vue';
    
    let lobby = "home";

    const uid = inject('uid');

    const setLobby = (code) => {
        lobby = code;
    };

    const getLobby = () => {
        return {
            code: lobby
        };
    };
</script>



<template>
    <div id="app">
        <div id="game-container" style="width: 1024px; height: 768px; background-color: white;">
            <h1 style="color: black;">This is where the game would go</h1>
        </div>
    </div>
    <div style="display: flex; flex-direction: column;">
        <chatBox :code="getLobby" />
        <chatForm :code="getLobby" :uid="uid" />
        <lobbySelect @lobby-code="setLobby" />
    </div>
</template>

<style scoped>

</style>