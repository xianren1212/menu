<template>
  <div class="ClassIfyHeader">
    <van-search
      v-model="value"
      shape="round"
      background="white"
      placeholder="搜索菜谱"
      readonly ="readonly"
      @click='$store.commit("updateIsHomeSearch", true)'
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value : null,
    }
  },
  
};
</script>

<style lang="less">
  .ClassIfyHeader{
    padding-top: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 540;
    background-color: white;
    width: 100%;
  }
</style>