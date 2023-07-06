<template>
  <div class="about img-fluid">
</div>
<div class="aboutme">
<h2>Welcome to my corner of the Web!</h2>
<p> I'm Amber-Kaye, a passionate and ambitious girl with a dream of becoming a web developer. I created this website as a platform to share my journey & experiences as I navigate the exciting world of web development.
From an early age, I found myself drawn to the limitless possibilities and creative freedom that the digital realm offers. As I explored various aspects of technology, I discovered the power of web development and its ability to shape the online landscape. The idea of crafting immersive user experiences, designing visually captivating websites, and bringing ideas to life through code - ignited a fire within me.
Driven by my passion, I embarked on a learning journey to acquire the skills necessary to excel in web development. Through self-study and hands-on projects, I delved into the realms of HTML, CSS & JavaScript. I immersed myself in the latest web development frameworks and tools, continuously expanding my knowledge and honing my craft.</p>
</div>
<div class="container mb-3">
  <div class="row">
    <div class="col">
<img  src="https://i.postimg.cc/RV3sTFg9/Screenshot-20230505-103824.jpg" alt="imageee" loading="lazy" class="image2">
</div>
<div class="col mt-3">
  <h3 class="text-black">Find Out More!</h3>
  <button class="custom-btn"><router-link to="../views/ResumeView.vue"><h4 class="text-black text-decoration-none">Resume</h4></router-link></button>
</div>
  </div>
</div>
</template>
<style scoped>
.about{
  min-height: 100vh;
  background:url(https://i.postimg.cc/Wzh9Kf8h/Screenshot-2023-07-06-111922.png) no-repeat center center/cover;
  background-attachment: fixed;
    position: relative;
    min-width: 100%;
    max-width:100%;
    z-index: 1;
    margin-top:0%;
}
.aboutme{
  text-align:center;
  background-color:#daaa7a;
  padding: 100px 20px 80px 20px;
  color:antiquewhite;
}
.image2{
  width:320px;
  height:380px;
}
.me{
  color:black;
  margin-top:0;
}
.other{
  margin-bottom: 130px;
}
.image2:hover{
  transform:scale(1.2) ;
}
.mb-3{
  margin-bottom: 130px!important;
}
.mt-3{
  margin-top:100px!important;
}
.custom-btn {
    text-decoration:none;
    text-transform:uppercase;
    font-weight:300;
    font-size:20px;
    width:150px;
    background-color:#414833;
    height:50px;
    padding:10px 10px 10px 10px;
    color:#fff;
    transition:  linear 0.5s;
    text-align:center;
    border-radius:15px;
}
.custom-btn:hover {
    background-color:#daaa7a;
    color:white!important;
    opacity:1;
}
*{
  text-decoration: none;
}
</style>