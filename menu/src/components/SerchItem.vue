<template>
  <div class="serchItem">
    <div
      class="itembox"
      v-for="(item, index) in foodlist"
      :key="index"
      @click="togofoodListItemDetails(item.id)"
    >
      <div class="left">
        <img
          :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
          alt=""
        />
      </div>
      <div class="right">
        <h1>{{ item.name }}</h1>
        <h2>{{ item.editname }}</h2>
        <p>
          <span>喜欢{{infos.likeCount + Math.floor(Math.random()*500)}}</span>
          <span>收藏{{infos.viewCount + Math.floor(Math.random()*500)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["foodlist"],
  data() {
    return {
      infos : {
        likeCount : 112 ,
        viewCount : 155
      }
    }
  },
  methods: {
    togofoodListItemDetails: function (id) {
      this.$router.push({
        path: "/foodListItemDetails",
        query: { id },
      });
      this.updateInfos(this.infos);
      this.$store.commit("updateisHome",false);
    },
    // 把song存到vueX中,拿到song里面的属性
    updateInfos: function (infos) {
        this.$store.commit("updateInfos",infos);
    },
  },
};
</script>

<style lang="less">
.serchItem {
  position: absolute;
  width: 100%;
  background-color: white;
  top: 60px;
  left: 0;
  .itembox{
    display: flex;
    margin-bottom: 30px;
    .left{
      width: 40%;
      text-align: left;
      img{
        width: 100%;
        border-radius: 5px;
      }
    }
    .right{
      width: 60%;
      box-sizing: border-box;
      padding-left: 20px;
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      h1,h2,p{
        width: 100%;
      }
      h1{
        font-size: 18px;
      }
      h2,p{
        color: #707070;
      }
      p{
        :nth-child(1){
          margin-right: 20px;
        }
      }
    }
  }
}
</style>