<template>
  <router-link class="a" :to="'/info/'+data.id">
    <div class="item">
      <div class="left" :style="{paddingTop:data.title.length>14?0:'16px'}">
        <h3>{{data.title}}</h3>
        <p>{{ data.hint }}</p>
      </div>
      <div class="right">
        <van-image
          width="100"
          height="100"
          lazy-load
          :src="data.images[0]"
          class="img"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "vListItem",
  props:["data"]
}
</script>

<style scoped>
  .item{
    height: 110px;
    padding:16px 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .item .left{
    width: 248px;
  }
  .item .left h3{
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    color: var(--font-color-1);
  }
  .item .left p{
    font-size: 10px;
    color: var(--font-color-2);
    line-height: 20px;
  }
  .item .right >>>.img{
    height: 76px !important;
    width: 76px !important;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
