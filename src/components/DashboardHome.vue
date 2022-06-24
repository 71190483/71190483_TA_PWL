<template>
<div>    
    <carousel-component/>
    <item-show-all/>
</div>

</template>
<script>
import CarouselComponent from './CarouselComponent.vue'
import ItemShowAll from './ItemShowAll.vue'
export default {
  components: {
     CarouselComponent, 
     ItemShowAll
     },
    name: 'DashboardHome',
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>