<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <router-link :to="'/info/'+item.id">
          <div class="item">
            <topImg :data="item"></topImg>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import topImg from "../../../components/topImg";

export default {
  name: "vBanner",
  components: {
    topImg
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      "banner": "home/banner"
    })
  }
}
</script>

<style scoped>
.item {
  width: 100vw;
  height: 368px;
  position: relative;
}


</style>
