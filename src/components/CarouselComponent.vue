<template>
    <div>
        <v-carousel hide-delimiters width="150%" height="100">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.path_file"></v-carousel-item>
        </v-carousel>
        <v-card-title class="my-auto mx-auto justify-center">
            Sparepart Store
        </v-card-title>
    </div>
</template>
<script>
import { db } from '@/db'
export default {
    name:"CarouselComponent",
    data(){
        return{
            items:[]
        }
    },
    created(){
        db.collection("carousel")
        .get()
        .then((querySnapshot) => {
            const documents = querySnapshot.docs.map((doc) => doc.data())
            this.items = documents
        })
    }
    
}
</script>