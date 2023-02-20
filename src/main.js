import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Local Css
import "./assets/main.css";

// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import axios from "axios"; //mengambil dari axios
import VueAxios from "vue-axios"; //mengambil dari axios

const app = createApp(App);

app.use(VueAxios, axios); //mengambil dari axios
app.use(router);

app.mount("#app"); //ada di index.html(harus sama di html)
