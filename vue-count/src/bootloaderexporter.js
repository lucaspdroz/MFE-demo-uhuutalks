import { createApp } from "vue";
import "./index.scss";
import VueApp from "./VueApp.vue";

export default (el) =>{
    createApp(VueApp).mount(el);
}