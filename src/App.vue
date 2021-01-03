<template>
  <div id="app">

    <div id="page">
      <!--        <keep-alive>-->

<!--      <transition name="van-fade">-->
        <router-view></router-view>
<!--      </transition>-->

      <!--        </keep-alive>-->
    </div>

  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapMutations({
      setTop: "setTop"
    }),

  },
  beforeUpdate() {
    document.getElementById('page').scrollTop = this.top[this.$route.path]
  },
  computed: {
    ...mapGetters({
      top: "top"
    })
  }
}
</script>

<style>
#page {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
