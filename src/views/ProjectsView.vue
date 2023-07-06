<template>
  <div class="top">
    <h3 class="someee text-white">Some of my older projects...</h3>
  </div>
  <div class="container" v-if="projects">
    <div
      class="card"
      style="width: 18rem"
      v-for="project in projects"
      :key="project.name"
    >
      <img :src="project.image_url" class="card-img-top" :alt="project.name" />
      <div class="card-body">
        <h5 class="card-title ">{{ project.name }}</h5>
        <p class="card-text">{{ project.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>
<style scoped>
.card {
  --s: 290px;
  --b: 8px;
  --g: 18px;
  --c: #414833;

  width: var(--s);
  aspect-ratio: 1;
  outline: calc(var(--s) / 2) solid #0009;
  outline-offset: calc(var(--s) / -2);
  cursor: pointer;
  transition: 0.3s;
  margin-top:50px;
}
.card-body{
    width:300px;
    height:200px;
}
img{
    width:280px;
    height:100px;
}

.sumwords {
  font-size: 10px;
}
.container {
    margin-left: 170px!important;
    display:grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: space-between;
    margin-top: 80px !important;
    margin-bottom: 120px !important;
}
.top {
  margin-top: 90px;
}
.card:hover {
  outline: var(--b) solid var(--c);
  outline-offset: var(--g);
}

.card {
  width: 18rem !important;
}
body {
  margin: 0;
  min-height: 100vh;
}
</style>
