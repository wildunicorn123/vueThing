import { createStore } from "vuex";

const fetchdata = "https://wildunicorn123.github.io/api/data.json"

export default createStore({
  state: {
    testimonials: null,
    projects:null,
    skills:null,
    education:null,

  },
  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setEducation: (state, education) => {
      state.education = education;
    }
  },
  actions: {

async fetchTestimonials(context) {
  try {
    let response = await fetch(fetchdata)
    let {testimonials} = await response.json()
    context.commit("setTestimonials", testimonials)
  }
  catch(error) {alert(error.message)}
},
async fetchProjects(context){
  try{
    let res = await fetch(fetchdata)
    let{projects} = await res.json()
    context.commit("setProjects", projects)
  }
  catch(error){alert(error.message)}
},
async fetchSkills(context){
  try{
    let resp = await fetch(fetchdata)
    let{skills} = await resp.json()
    context.commit("setSkills", skills)
  }
  catch(error){alert(error.message)}
},
async fetchEducation(context){
  try{
    let respo = await fetch(fetchdata)
    let{education} = await respo.json()
    context.commit("setEducation", education)
  }
  catch(error){alert(error.message)}
}
},
});
