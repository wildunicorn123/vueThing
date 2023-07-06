<template>
<div class="row my-3 justify-content-between gap-3" v-if="testimonials">
    <div class="testimony-card" v-for="test in testimonials" :key="test.name">
        <div class="top-wrapper">
        <h6 class="display-6">{{ test.name }}</h6>
        <img
            class="img-fluid rounded-circle"
            loading="lazy"
            :src="test.image_url"
            :alt="test.name"/>
        </div>
        <div class="contents">
        <p class="lead">{{ test.desc }}</p>
        </div>
    </div>
    </div>
</template>
<script>


export default{
    computed: {
    testimonials() {
    return this.$store.state.testimonials;
    },
},
mounted() {
    this.$store.dispatch("fetchTestimonials");
},
}
</script>
<style>
img{
    width:300px;
    height:200px;
}
p{
    font-size:20px;
}
</style>