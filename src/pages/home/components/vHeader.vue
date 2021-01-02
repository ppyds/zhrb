<template>
  <header>
    <div class="left">
      <div class="date">
        <strong>{{date.day}}</strong>
        <br>
        <span>{{ date.month }} 月</span>
      </div>
      <div class="logo">
        知乎日报
      </div>
    </div>
    <div class="right">
      <div class="img_box">
        <img src="https://storage.live.com/users/0xc772e3b4e9a554b5/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=2C07F8352FF9626E225BF7862EBA63A7&fofoff=1" alt="">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "vHeader",
  props:["date"]
}
</script>

<style scoped>
  header{
    height: 64px;
    /*background: red;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 0;
  }
  header .left{
    text-align: center;
    display: flex;
  }
  header .left .date{
    width: 63px;
  }
  header .left .date strong{
    font-size: 18px;
    color: var(--font-color-1);
    line-height: 25px;
  }
  header .left .date span{
    font-size: 12px;
    color: var(--font-color-2);
    line-height: 20px;
  }
  header .left .logo{
    height: 38px;
    border-left: var(--border-color-1) 2px solid;
    padding-left: 12px;
    font-size: 24px;
    line-height: 38px;
    color: var(--font-color-1);
  }
  header .right .img_box{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }
  header .right .img_box img{
    width: 100%;
    min-height: 100%;
  }
</style>
