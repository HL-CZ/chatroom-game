import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'

const firebaseConfig = {
  //Insert API key -----------------------------------------------------------
}

import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const currentUser = { user: "test123", uid: "123123132" };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser.user = {
            uid: user.uid
        }
    } else {
            //currentUser.user = null
    }
})

let router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App);
app.use(router);

console.log(currentUser);

app.provide( 'apiKey', firebaseConfig);
app.provide( 'uid', currentUser.uid);



app.mount('#app');
