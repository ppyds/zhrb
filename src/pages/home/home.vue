<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div id="home">
        <div class="header">
          <v-header :date="toDay"></v-header>
        </div>
        <div class="banner">
          <v-banner></v-banner>
        </div>
        <div class="list_box" v-for="item in list">

          <van-sticky :offset-top="'17.067vw'" class="time_box">
            <time v-if="item.time">
            <span>{{
                item.time.slice(0, 4) + " 年 " + item.time.slice(4, 6) + " 月 " + item.time.slice(6, 8) + " 日 "
              }}</span>
            </time>
          </van-sticky>
          <v-list-item v-for="i in item.list" :data="i"></v-list-item>
        </div>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import vHeader from "./components/vHeader";
import vBanner from "./components/vBanner";
import vListItem from "../../components/vListItem";
import {mapActions, mapGetters, mapMutations} from "vuex";
import store from "../../store";

export default {
  name: "home",
  components: {
    vHeader, vBanner, vListItem
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      toDay: {
        day: '01',
        month: '1'
      }
    };
  },
  methods: {
    getTime(num) {
      if (num) {
        return new Date(Date.now() - 24 * 60 * 60 * 1000 * this.index);
      } else {
        return new Date();
      }

    },
    ...mapActions({
      "getTodayList": "home/getTodayList",
      "getOldList": "home/getOldList"
    }),
    ...mapMutations({
      setIndex: "home/setIndex",
      setTop: "home/setTop"
    }),
    async onLoad() {
      const date = this.getTime(24 * 60 * 60 * 1000);
      const timerStr = zero(date.getFullYear()) + zero(date.getMonth() + 1) + zero(date.getDate())
      await this.getOldList(timerStr);
      this.refreshing = false;
      this.loading = false;
      // this.finished = true;
      //   this.finished = true;
      this.setIndex(this.index + 1)//更新index值 避免重复请求相同的数据
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  computed: {
    ...mapGetters({
      list: "home/list",
      index: "home/index"
    })
  },
  mounted() {
    this.getTodayList();
    const date = this.getTime();
    this.toDay.day = zero(date.getDate());
    this.toDay.month = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"][date.getMonth()];
    document.getElementById('page').scrollTop = store.state.top[this.$route.path];
  }
}

function zero(num) {
  if (num < 10)
    return "0" + num
  else
    return "" + num;

}
</script>

<style scoped>
#home {
  padding-top: 64px;
}

>>> .header {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  background: var(--bg-color-1);
  /*box-shadow: var(--bg-color-2) 0 5px 5px 0;*/
}

.banner {
  height: 368px;
}

.list_box {
  padding: 0 16px;
}

>>> .van-sticky--fixed * {
  padding: 0 16px;
  background: var(--bg-color-2);
  /*box-shadow: var(--bg-color-3) 0 5px 0 0;*/
  /*background: greenyellow;*/
}
>>> .van-sticky--fixed time span{
  font-size: 20px;
  color: var(--font-color-3);
  padding-left: 0;
}
time {
  display: block;
  height: 38px;
  position: relative;
  background: var(--bg-color-1);

}

time:after {
  content: " ";
  display: block;
  height: 2px;
  background: var(--bg-color-2);
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -1px;
  z-index: 0;
}
time span {
  height: 38px;
  display: inline-block;
  background: var(--bg-color-1);
  position: relative;
  z-index: 1;
  width: auto;
  font-size: 12px;
  line-height: 38px;
  padding-right: 16px;
  color: var(--font-color-2);
}
</style>
