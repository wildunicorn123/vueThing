<template>
<div class="hero">
  <h1 class="typing">An Aspiring Web-developer and Full-stack developer.</h1>
</div>
</template>
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
.typing
{
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

</style>