import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials:null,
    Data:null,
  },
  mutations: {
    setTestimonials:(state,testimonials) =>{
      state.testimonials = testimonials;
    },
  },
  actions:{
    getTestomonials: async(context) =>{
      fetch("https://wildunicorn123.github.io/api/data.json").then((res) => res.json()).then((testimonials) =>context.commit("setTestimonials",testimonials.testimonials))
    },
  }
  },
)
