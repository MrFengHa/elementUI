import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import ButtonDetail from "../components/ButtonDetail";
import Radio from "../components/Radio";
import Select from "../components/Select";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/button',component:Button},
    {path: '/buttondetail',component:ButtonDetail},
    {path: '/Radio',component:Radio},
    {path: '/Radio',component:Select}
  ]
})
