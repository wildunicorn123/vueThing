<template>
<div class="hero">
  <h1 class="typing">{{ message }}</h1>
</div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      index: 0,
      speed: 100,
      text: 'An Aspiring Web-developer and Full-stack developer.'
    };
  },
  mounted() {
    this.typing();
  },
  methods: {
    typing() {
      if (this.index < this.text.length) {
        this.message += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.typing, this.speed);
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/inknut-antiqua");

h1 {
  font-family: "Inknut Antiqua", sans-serif;
  font-size: 3em;
  color: black;
  text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
body{
  background-color:#daaa7a;
}
.about{
  margin-top:100px;
  color:black;
}
.hero {
    min-height: 100vh;
    background: url(https://i.postimg.cc/SRBg0CBr/brown-studio-background-high-quality-vector.jpg) no-repeat center center/cover;
    background-attachment: fixed;
    position: relative;
    min-width: 100%;
    max-width:100%;
    z-index: 1;
}

</style>