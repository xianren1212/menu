<template>
  <div class="moreHistory">
    <div class="top">
      <div class="svg1" @click="$router.back()">
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
        <h1>浏览记录</h1>
      </div>
      <div class="svg2" @click="clearMoreHistoryList">
        <svg
          t="1610077139103"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3121"
          width="23"
          height="23"
        >
          <path
            d="M634.50112 908.99968c0 0.59392-0.062464 1.171456-0.078848 1.7408 0.016384-0.444416 0.141312-0.859136 0.141312-1.296384 0-0.155648-0.047104-0.288768-0.062464-0.444416zM511.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM671.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM351.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32z"
            fill="#515151"
            p-id="3122"
          ></path>
          <path
            d="M864 160.008192h-64V64c0-35.351552-28.655616-64-64-64h-448c-35.342336 0-64 28.648448-64 64v96.008192h-64c-53.014528 0-96 42.984448-96 96v64h95.937536V928c0 53.014528 42.985472 96 96 96h512c53.015552 0 96-42.985472 96-96V320.008192H960v-64c0-53.016576-42.984448-96-96-96zM288 64h448v95.859712h-448V64z m511.937536 864c0 17.640448-14.358528 32-32 32h-512c-17.640448 0-32-14.359552-32-32V320.008192h576V928z m96-671.991808v15.98976h-768v-15.98976H128c0-17.649664 14.359552-32 32-32h704c17.641472 0 32 14.350336 32 32h-0.062464z"
            fill="#515151"
            p-id="3123"
          ></path>
        </svg>
      </div>
    </div>
    <div class="box" v-if="moreHistoryList">
      <div v-for="(item,index) in moreHistoryList" :key="index">
        <div class="historyItem"  @click="navigateToFoodlist(item.id,item.infos)">
          <div class="left">
            <img
              :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
              alt=""
            />
          </div>
          <div class="right">
            <h1>{{ item.name }}</h1>
            <h2 v-if="item.user.nickname">{{ item.user.nickname }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="default" v-else>
      <span>暂无记录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreHistoryList: [],
    };
  },
  methods: {
    navigateToFoodlist: function (id,infos) {
      this.$router.push({
        path: "/foodListItemDetails",
        query: { id },
      });
      this.updateInfos(infos);
    },
    
    // 把song存到vueX中,拿到song里面的属性
    updateInfos: function (infos) {
        this.$store.commit("updateInfos",infos);
    },
    // 清除
    clearMoreHistoryList: function(){
      this.moreHistoryList = []
      this.$store.commit("clearMoreHistoryList");
    }
  },
  // computed: {
  //   moreHistoryList:function () {
  //     return this.$store.state.moreHistoryList;
  //   },
  activated() {
    let moreHistoryList = JSON.parse(localStorage.getItem("moreHistoryList"));
    // console.log(moreHistoryList)
    if (moreHistoryList) {
      this.moreHistoryList = moreHistoryList;
      // console.log(this.moreHistoryList);
    }
  },
};
</script>

<style lang="less">
.moreHistory {
  position: relative;
  top: 1;
  left: 0;
  z-index: 520;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 10px;
  .top {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: white;
    .title {
      flex: 1;
      font-size: 18px;
    }
  }
  .box{
    width: 100%;
    margin-top: 50px;
    padding-bottom: 50px;
    background-color: white;
    .historyItem {
      margin-top: 20px;
      display: flex;
      width: 100%;
      .left {
        width: 40%;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      .right {
        width: 60%;
        display: flex;
        box-sizing: border-box;
        padding-left: 20px;
        text-align: left;
        flex-wrap: wrap;
        align-items: center;
        h1,
        h2 {
          width: 100%;
        }
        h1 {
          font-size: 20px;
        }
        h2 {
          color: #707070;
        }
      }
    }
  }
  .default{
    position: absolute;
    width: 100px;
    height: 50px;
    line-height: 50px;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -50px;
    color: #707070;
  }
}
</style>