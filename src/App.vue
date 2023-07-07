<template>
<NavBarcomp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBarcomp from "./components/NavBar-comp.vue";
import FooterComp from "./components/Footer-comp.vue"
export default{
  components:{NavBarcomp, FooterComp}
}
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/inknut-antiqua');
#app {
  font-family: 'Inknut Antiqua', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 70px;
  height: 70px;
  border-radius: 70px;
}
nav{
    background-color: transparent !important;
}
.offcanvas{
  background-color:#daaa7a!important;
}
body{
  overflow-x:hidden;
}
footer{
  background:transparent!important;
  margin-top:none!important;
}
*{
  text-decoration:none!important;
}
body{
  background-color:#daaa7a;
}
</style>
