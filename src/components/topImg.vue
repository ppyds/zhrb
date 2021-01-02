<template>
  <div class="item">
    <img v-if="data.image" v-lazy="data.image"/>
    <div class="text">
      <h3 v-if="data.title" :style="{paddingBottom:data.hint?0:'30px'}">{{ data.title }}</h3>
      <p v-if=" data.hint">{{ data.hint }}</p>
      <div class="cover">
        <img v-if="data.image" v-lazy="data.image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topImg",
  props:["data"]
}
</script>

<style scoped>
.item >>> img {
  width: 100%;
  min-height: 100%;
}

.item .text {
  position: absolute;
  z-index: 2;
  padding-left: 20px;
  padding-right: 20px;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
}
.item .text .cover{
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  filter:blur(10px);
  width: 100vw;
  z-index: -1;
  overflow: hidden;
}
.item .text .cover img{
  position: absolute;
  bottom: 0;
}
.item .text h3{
  line-height: 39px;
  color: var(--font-color-3);
  font-size: 23px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-top: 20px;
}

.item .text p{
  color: var(--font-color-4);
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 20px;
}
</style>
