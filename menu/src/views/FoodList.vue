<template>
  <!-- <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  > -->
  <div>
    <div class="foodList">
      <div class="top" v-if="fath">
        <div class="svg" @click="$router.back()">
          <svg
            t="1609324708219"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3123"
            width="25"
            height="25"
          >
            <path
              d="M277.818 543.962l401.629 384.163c18.504 17.681 48.475 17.68 66.947 0s18.474-46.361 0-64.043l-368.194-352.129 368.194-352.155c18.474-17.68 18.474-46.331 0-64.012-18.474-17.682-48.444-17.682-66.947 0l-401.629 384.163c-18.504 17.652-18.504 46.331 0 64.012z"
              p-id="3124"
              fill="#707070"
            ></path>
          </svg>
        </div>
        <div class="title">
          <h1>{{ fath.name }}</h1>
        </div>
      </div>
      <div class="box">
        <van-pull-refresh
          v-model="isLoading"
          pulling-text="下拉可以刷新"
          loosing-text="松开立即刷新"
          loading-text="正在刷新数据中..."
          success-text="刷新成功"
          @refresh="onRefresh"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <FoodListItem :song="song"></FoodListItem>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>
<script>
import FoodListItem from "@/components/FoodListItem.vue";

export default {
  components: {
    FoodListItem,
  },
  data() {
    return {
      song: [],
      fath: [],
      isLoading: false,
      page: 0,
      loading: false,
      finished: false,
      isonLoad: false,
    };
  },
  methods: {
    onLoad() {
      // // 数据全部加载完成
      if (this.song.length >= 30) {
        this.finished = true;
      }
      this.getData(this.page);
      // 加载状态结束
      setTimeout(() => {
        this.loading = false;
        this.page += 1;
      }, 5000);
    },

    onRefresh() {
      setTimeout(() => {
        // Toast("刷新成功");
        this.isLoading = false;
        (this.song = []), (this.fath = []), this.getData(0);
      }, 1000);
    },
    getData(page) {
      // 当前的菜谱列表
      this.axios
        .get(
          "http://api.ecook.cn/public/getContentsBySubClassid.shtml?device=iPhone%20X&id=" +
            this.$route.query.id +
            "&machine=Oc475a69871f2adee63cd6873105ab9efa429189a&page=" +
            page +
            "&terminal=3&version=13.5"
        )
        .then((response) => {
          for (var k in response.data.list) {
            this.song.push(response.data.list[k]);
          }
          this.fath = response.data;
          // console.log(response)
        });
    },
  },
  activated() {
    this.song = [];
    this.fath = [];
    this.getData(0)
  },
};
</script>

<style lang='less'>
.foodList {
  width: 100%;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10px;
  .van-pull-refresh__head {
    position: absolute;
    top: 10px;
    z-index: 55;
  }
  .top {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 100;
    .svg {
      width: 20%;
      height: 100%;
      text-align: left;
      display: flex;
      align-items: center;
    }
    .title {
      width: 80%;
      flex: 1;
      h1 {
        font-size: 19px;
        margin-left: -20%;
      }
    }
  }
}
</style>