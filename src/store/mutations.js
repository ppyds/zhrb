export let state = {
  top: {}//记录首页滚动的距离
}
export let mutations = {
  setTop(state, arr) {
    state.top[arr[0]] = arr[1];
  }
}
export let getters = {
  top(state) {
    return state.top;
  }
}
