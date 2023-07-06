<template>
<div class="top">
    <h3 class="someee text-white">Some of my older projects...</h3>
</div>
<div class="container" v-if="projects">
    <div class="row" v-for="project in projects" :key="project.name">
        <div class="col">
            <img
        class="img-fluid"
        :src="project.image_url"/>
        <h5 class="words">{{ project.name }}</h5>
        <p class="sumwords">{{ project.desc }}</p>
        </div>
    </div>
</div>
</template>
<script>
export default{
    computed: {
    projects() {
    return this.$store.state.projects;
    },
},
mounted() {
    this.$store.dispatch("fetchProjects");
},
}
</script>
<style scoped>
img{
    width:200px;
    height:150px;
    --s: 190px;
    --b: 8px;
    --g: 14px;
    --c: #414833;

    width: var(--s);
    aspect-ratio: 1;
    outline: calc(var(--s)/2) solid #0009;
    outline-offset: calc(var(--s)/-2);
    cursor: pointer;
    transition: 0.3s;
}
.sumwords{
    font-size: 10px;
}
.container{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 80px!important;
    margin-bottom: 120px!important;
}
.top{
    margin-top:100px;
}
img:hover {
    outline: var(--b) solid var(--c);
    outline-offset: var(--g);
}

img + img {
    border-radius: 50%;
}


body {
    margin: 0;
    min-height: 100vh;
}
</style>