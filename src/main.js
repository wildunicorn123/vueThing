import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* add icons to the library */
library.add(faGithub,faTwitter,faFacebook,faInstagram,faLinkedinIn,faEnvelope, faLocationDot, faPhoneVolume, faJs, faHtml5, faCss3, faVuejs, faBootstrap, faDownload)






createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


import "bootstrap/dist/js/bootstrap.js";
import { faBootstrap, faCss3, faFacebook, faGithub, faHtml5, faInstagram, faJs, faLinkedinIn, faTwitter, faVuejs} from "@fortawesome/free-brands-svg-icons";import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

