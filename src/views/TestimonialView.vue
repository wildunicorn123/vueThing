<template>
<div v-if="testimonial">
    <div v-for="testimonial in testimonial" :key="testimonial.id" :testimonial="testimonial">
        <img :src="testimonial.image_url" :alt="testimonial.name">
        {{testimonial.name}}
        {{testimonial.desc}}
    </div>
</div>
<div v-else>Hold-on for a minute...or two...or a few</div>
</template>
<script>
import Card from '../components/card.vue'
export default{

}
</script>