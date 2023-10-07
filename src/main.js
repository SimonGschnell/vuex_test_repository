import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

const store =  createStore({
    state() {
        return{
            count: 0,
            text: "lorem",
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
        
    },
    getters: {
        getDoubleCount (state){
            return state.count *2;
        }
    }, 
    actions: {
        incrementTwice( state , payload){
            for(let i = 0; i < payload.len; i++){
                state.commit("increment");
            }
        }
    }
})
let app = createApp(App);
app.use(store);
app.mount('#app')
