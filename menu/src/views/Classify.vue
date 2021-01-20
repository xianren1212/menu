<template>
  <div class="classify">
    <ClassIfyHeader />
    <div class="boxClassify">
      <van-pull-refresh
        v-model="isLoading"
        pulling-text="下拉可以刷新"
        loosing-text="松开立即刷新"
        loading-text="正在刷新数据中..."
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <ClassIfySong
          v-for="(item, index) in classIfy"
          :key="index"
          :item="item"
        ></ClassIfySong>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import ClassIfyHeader from "@/components/ClassIfyHeader.vue";
import ClassIfySong from "@/components/ClassIfySong.vue";

export default {
  components: {
    ClassIfyHeader,
    ClassIfySong,
  },
  data() {
    return {
      // 菜谱分类
      classIfy: [],
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
    getData() {
      this.$root.isShowLoading = true;
      this.axios
        .get("getRecipeHomeData.shtml")
        .then((response) => {
          this.classIfy = response.data.list;
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
.classify {
  position: relative;
  .boxClassify {
    position: absolute;
    top: 60px;
    padding-bottom: 100px;
    .van-pull-refresh__head {
      position: absolute;
      top: 10px;
      z-index: 55;
    }
  }
}
</style>
