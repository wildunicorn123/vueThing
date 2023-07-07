<template>
<h2 class="num">What others think of me...</h2>
<div class="row my-3 justify-content-between gap-3" v-if="testimonials">
    <div class="col testimony-card" v-for="test in testimonials" :key="test.name">
        <div class="top-wrapper">
            <img
            class="img-fluid rounded-circle"
            loading="lazy"
            :src="test.image_url"
            :alt="test.name"/>
        <h7 class="display-6">{{ test.name }}</h7>
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
<style scoped>
img{
    width:150px;
    height:200px;
}
p{
    font-size:15px;
}
.num
{
    margin-top:80px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ede0d4 0%,
    #ff4b3e 29%,
    #972d07 67%,
    #242331 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 50px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.testimony-card{
    border:4px;
    border-color:#242331;
    padding-left:100px;
    padding-right:100px;
    margin-top:50px;
}
.row{
    margin-bottom:100px!important;
}
.contents{
    margin-top:10px;
}
</style>