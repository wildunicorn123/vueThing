import { createStore } from "vuex";

const fetchdata = "https://wildunicorn123.github.io/api/data.json"

export default createStore({
  state: {
    testimonials: null,
    projects:null,

  },
  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
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
}
},
});
