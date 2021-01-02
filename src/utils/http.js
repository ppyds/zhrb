
import axios from "axios";
const base = "/api"
// 最新新闻
export const getNowNews = () => axios({
  url:base+ "/api/4/stories/latest",
  method:"get"
});
//之前的新闻
export const  getOldNews = time =>axios({
  url:base + `/api/4/stories/before/${time}`, //yyddmm
  method:"get"
});
//新闻详情
export const getNewsInfo = id =>axios({
  url: base + `/api/4/story/${id}`,
  method:"get",
  params:{
    id
  }
})



axios.interceptors.response.use(res => {
  return res.data
})
