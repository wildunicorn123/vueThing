<template>
<div class="color">
    <h1 class="aka">Miss Amber-Kaye Africa</h1>
    <div class="container">
        <div class="row">
            <div class="col">
                <p><font-awesome-icon :icon="['fas', 'phone-volume']" style="color: #f7f7f8;" />&nbsp &nbsp 0627145387</p>
            </div>
            <div class="col">
                <p><font-awesome-icon :icon="['fas', 'location-dot']" style="color: #f5f7f9;" />&nbsp &nbsp Hanover Park,Cape Town</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p><font-awesome-icon :icon="['far', 'envelope']" style="color: #fafcff;" />&nbsp &nbsp amberkayeafr6901@gmail.com</p>
            </div>
            <div class="col">
                <p><font-awesome-icon :icon="['fab', 'linkedin-in']" style="color: #fbfcfe;" />&nbsp &nbsp https://www.linkedin.com/in/amber-kaye-africa-761195242</p>
            </div>
        </div>
    </div>
</div>
<div class="colorstwo">
    <div class="black">
        <p class="colourful">I am a hard-working, detailed orientated professional with 2+ years in the working environment. I
have acquired a particular skill set over this period of time, in terms of dealing with people,
protocol, structures and development, ethics and due diligence. My aim is to leverage my skill
set and apply it as best as possible within your organization. </p>
    </div>
    <div class="container1">
        <div class="row one" >
            <div class="col-md-4" v-if="education"><h2 class="left">Education:</h2></div>
            <div class="col" v-for="educatio in education" :key="educatio.name">{{ educatio.desc }}&nbsp &nbsp{{ educatio.name }}</div>
        </div>
        <div class="row">
            <div class="col thing"><h2>Soft Skills:</h2></div>
            <div class="col" v-if="skills">
                <ul v-for="skill in skills" :key="skill.name">
                    <li>{{ skill.desc }}</li>
                    </ul>
                    </div>
        </div>
    </div>
</div>
<div class="what">
    <h3>Technical Skills</h3>
    <div class="container " style="position:relative;">
                <section class="row gap-5">
                        <div id="ding1" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'vuejs']" beat size="2xl" style="color: #fafcff;" />
                        </div>
                        <div id="ding1" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'bootstrap']" beat size="2xl" style="color: #ffffff;" />
                        </div>
                        <div id="ding2" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'js']" beat size="2xl" style="color: #ffffff;" />
                        </div>
                        <div id="ding2" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'css3']" beat size="2xl" style="color: #fafcff;" />
                        </div>
                        <div id="ding3" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'html5']" beat size="2xl" style="color: #fcfcfc;" />
                        </div>
                        <div id="ding3" class="col d-flex flex-column align-items-center gap-3 ">
                            <font-awesome-icon :icon="['fab', 'github']" beat size="2xl" style="color: #ffffff;" />
                        </div>
                </section>
            </div>
</div>
<div class="cv">
    <h3>For Further Information and details, find my Curriculum Vitae</h3>
    <a href="https://drive.google.com/file/d/11qXcHfEnpYVZwp4dd6YOyMwVL5lxpo7m/view?usp=sharing"><font-awesome-icon :icon="['fas', 'download']" size="xl" style="color: #daaa7a;" /></a>
</div>
</template>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/zalamandercaps');
.color>p {
    font-size:5px!important;
    color:black!important;
}
p{
    color:rgb(10, 10, 10);
}
.container{
    margin-top: 80px!important;
}
.col{
    text-align:left!important;
}
.what{
    background-color: #daaa7a;
    margin-bottom:100px;
    margin-top:50px;
    color:black;
    font-family: 'ZalamanderCaps', sans-serif;
}
.what > font-awesome-icon{
    size:100px!important;
}
.color>h1{
 text-align:center;
 font-size:90px;
 color:white;
}
.custom{
    background-color:white;
    border:none;
}
.colorstwo{
    background-color:white;
    padding-bottom:40px;
}
.cv{
    background-color:white;
    color:black;
    margin-bottom:70px;
    padding-bottom:50px;
    padding-top:50px;
    font-family: 'ZalamanderCaps', sans-serif;
}
.color{
    padding-top:70px;
    background-color:#daaa7a;
    padding-bottom: 50px;
}
.colourful{
    color:black;
    margin-top:50px;
    margin-bottom:30px;
    font-family: 'ZalamanderCaps', sans-serif;
}
.black{
    padding-top:15px;
    padding-bottom:15px;
    padding-left:10px;
    padding-right:10px;
}

.container1{
    color:black;
    font-family: 'ZalamanderCaps', sans-serif;
}
.left{
    margin-right:80px!important;
}
ul{
    text-align:left;
}
.one{
    margin-bottom:90px!important;
}
.thing{
    padding-left:150px!important;
}

</style>
<script>
export default{
    computed: {
    skills() {
    return this.$store.state.skills;
    },
    education(){
        return this.$store.state.education;
    }
},
mounted() {
    this.$store.dispatch("fetchSkills");
    this.$store.dispatch("fetchEducation");
},
}
</script>