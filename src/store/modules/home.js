import {getNowNews, getOldNews} from "../../utils/http";

let state = {
  banner: [],
  list: [],
  index: 1 //用于判断该加载哪天的数据

}
let mutations = {
  setBanner(state, data) {
    state.banner = data;
  },
  setList(state, data) {
    state.list = data;
  },
  setIndex(state, num) {
    state.index = num;
  },


}
let getters = {
  banner(state) {
    return state.banner;
  },
  list(state) {
    return state.list;
  },
  index(state) {
    return state.index;
  },

}
let actions = {
  getTodayList(context) {
    if (context.state.banner.length > 1) {
      return;
    }
    getNowNews().then(res => {
      context.commit("setBanner", res.top_stories);
      context.commit("setList", [{time: "", list: res.stories}]);
    });
  },
  async getOldList(context, timer) {
    const res = await getOldNews(timer);
    context.commit("setList", [...context.state.list, {time: timer, list: res.stories}]);
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  //命名空间
  namespaced: true
}
