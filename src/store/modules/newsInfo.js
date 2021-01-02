import {getNewsInfo} from "../../utils/http";

let state = {
  newsInfo: {},
  isLoading: true,
}
let mutations = {
  setNewsInfo(state, data) {
    state.newsInfo = data;
  },
  setIsloading(state, data) {
    state.isLoading = data;
  }
}
let getters = {
  newsInfo(state) {
    return state.newsInfo;
  },
  isLoading(state) {
    return state.isLoading;
  }
}
let actions = {

  async getNewsInfo(context, id) {
    this.commit("newsInfo/setIsloading", true);
    context.commit("setNewsInfo", []);
    const res = await getNewsInfo(id);
    context.commit("setNewsInfo", res);
    isLoading.call(this, res.css[0])
  }
}

//加载中
function isLoading(url) {

  let iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.display = "none";
  const that = this;
  if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () { // IE
      onload()
    });
  } else {
    iframe.onload = function () { // 非IE
      that.isloading = false;
      onload()
    };
  }
  document.body.appendChild(iframe);

  function onload() {
    that.commit("newsInfo/setIsloading", false);
    iframe.remove()
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
