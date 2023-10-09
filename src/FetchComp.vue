<script>

import {ref, onMounted} from 'vue'

export default {
    setup(){
        const isLoading = ref(true);
        const data = ref([]);

        
        async function getData(){
            isLoading.value = true;
            try{
                await new Promise((resolve, reject)=>{ setTimeout(()=>{resolve("success")}, 2000)});
                let d = await fetch("https://type.fit/api/quotes");
                let better_data = await d.json();
                console.log(better_data);
                data.value = better_data;
                
            }catch(e){
                console.log(e.message);
            }finally{
                isLoading.value = false;
            }
            
            
        }
        return {
            data,
            isLoading,
           getData,
        }

        
    },

    mounted(){
        this.getData();
    }
            
}
</script>

<template>

<p v-if="!isLoading" v-for="quote in data">{{ quote.text }}</p>
<p v-else >fetching data ...</p>
</template>

<style scoped>
p{
    color:red;
}
</style>