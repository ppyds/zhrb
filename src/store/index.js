import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import {state, getters, mutations} from './mutations';
import {actions} from './actions';
import home from "./modules/home";
import newsInfo from "./modules/newsInfo";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    newsInfo
  }
})
