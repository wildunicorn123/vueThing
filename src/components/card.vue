<template>
<router-link :to="{name:'testimonials'}"></router-link>
<img :src="testimonials.image_url" :alt="testimonials.name">
<h3>{{testimonials.name}}</h3>
<p>{{testimonials.desc}}</p>
</template>
<script>
    export default{
        props:["testimonials"]
}
</script>
<style></style>