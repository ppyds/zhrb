<template>
  <div id="info">
    <van-icon class="back" @click="back" name="arrow-left" />
    <div v-if="!isLoading">
      <div class="img_box">
        <top-img :data="newsInfo"></top-img>
      </div>

      <link rel="stylesheet"  v-for="item in newsInfo.css" :href="item">
      <div class="content" v-html="newsInfo.body">
      </div>
    </div>
    <van-loading class="loading" size="50vw" v-if="isLoading" vertical>加载中...</van-loading>
  </div>
</template>

<script>
import topImg from "../../components/topImg";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "newsInfo",
  components:{
    topImg
  },
  methods:{
    ...mapActions({
      "getNewsInfo":"newsInfo/getNewsInfo"
    }),
    back(){
      this.$router.go(-1);
    }
  },
  mounted() {
    this.getNewsInfo(this.$route.params.id);

  },
  computed:{
    ...mapGetters({
      "newsInfo":"newsInfo/newsInfo",
      "isLoading":"newsInfo/isLoading"
    })
  }
}
</script>

<style scoped>
.img_box{
  position: relative;
}
>>>.headline{
  display: none !important;
}
>>>.view-more{
  display: none !important;
}
.loading{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.back{
  font-size: 40px;
  position: fixed;
  z-index: 3;
  padding: 20px 15px;
  color: var(--font-color-4);
  background: var(--font-color-1);
  opacity: .5;
  border-radius: 0 0 80px 0;
}
</style>
