<template>
<div>
  <div class="home">
    <div class="search">
      <van-search
        v-model="value"
        placeholder="搜索 菜谱/食材"
        input-align="center"
        shape="round"
        width="70px"
        readonly="readonly"
        @click="$store.commit('updateIsHomeSearch', true)"
      />
    </div>
    <van-pull-refresh
      v-model="isLoading"
      pulling-text="下拉可以刷新"
      loosing-text="松开立即刷新"
      loading-text="正在刷新数据中..."
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <HomeHeader :bannerlist="bannerlist"></HomeHeader>
      <div class="recommend">
        <h3>精选推荐</h3>
        <FoodListItem :song="recommend"></FoodListItem>
        <h4>我是我底线*。*</h4>
      </div>
    </van-pull-refresh>
  </div>

</div>
</template>

<script>
// import { Toast } from "vant";
import HomeHeader from "@/components/HomeHeader.vue";
import FoodListItem from "@/components/FoodListItem.vue";

export default {
  components: {
    HomeHeader,
    FoodListItem,
  },
  data() {
    return {
      // 轮播
      bannerlist: [],
      // 推荐
      recommend: [],
      // vant
      value: null,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        // Toast("刷新成功");
        this.isLoading = false;
        this.getData();
      }, 1000);
    },
    getData: function () {
      this.$root.isShowLoading = true;

      this.axios
        .get("getSecondaryHomeData.shtml")
        .then((response) => {
          // console.log(response)
          this.bannerlist = response.data.data.bannerlist;
          // console.log(this.bannerlist)
        })
        .finally(() => {
          this.$root.isShowLoading = false;
        });
      this.axios
        .get("getSecondaryHomeData.shtml?app=common")
        .then((response) => {
          // console.log(response)
          this.recommend = response.data.data.excellentRecipe;
          // console.log(this.recommend)
        })
        .finally(() => {
          this.$root.isShowLoading = false;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less">
.home {
  width: 100%;
  background-color: white;
  padding-bottom: 80px;
  // position: relative;
  .search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 7vh;
    // line-height: 8vh;
    z-index: 66;
    display: flex;
    justify-items: center;
    background-color: white;

    .van-search {
      width: 70%;
      margin-left: 15%;
    }
  }
  .van-pull-refresh__head {
    position: absolute;
    top: 52px;
    z-index: 55;
  }
  .recommend {
    padding: 10px;
    width: 100%;
    h3 {
      font-size: 20px;
      text-align: left;
    }
    h4 {
      font-size: 17px;
      margin-top: 100px;
      color: #707070;
    }
  }
}
</style>