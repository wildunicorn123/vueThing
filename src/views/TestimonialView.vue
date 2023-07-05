<template>
<div v-if="testimonials">
<div v-for="testimonials in testimonials" :key="testimonials.id" :testimonials="testimonials">
    <img :src="testimonials.image_url" :alt="testimonials.name">
    {{testimonials.name}}
    {{testimonials.desc}}
</div>
</div>
<div v-else>Hold-on for a minute...or two...or a few</div>
</template>
<script>
import Card from '../components/card.vue'

export default{
    computed:{
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    mounted(){
        this.$store.dispatch('getTestimonials');
    },
    components:{Card}
}
</script>