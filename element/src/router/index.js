import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import ButtonDetail from "../components/ButtonDetail";
import Radio from "../components/Radio";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/button',component:Button},
    {path: '/buttondetail',component:ButtonDetail},
    {path: '/Radio',component:Radio}
  ]
})
