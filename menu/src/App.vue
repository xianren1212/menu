<template>
  <div id="app">
    <div class="loading" v-show="$parent.isShowLoading">
      <div class="box">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpgs"
          alt=""
        />
        <h1>加载中...</h1>
      </div>
    </div>

    <HomeSearch v-if="isHomeSearch"></HomeSearch>
    <HomeNav></HomeNav>

    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import HomeSearch from "@/components/HomeSearch.vue";
import HomeNav from "@/components/HomeNav.vue";
export default {
  components: {
    HomeNav,
    HomeSearch,
  },
  data() {
    return {
      isHaomeSearch: false,
      transitionName: null,
    };
  },
  computed: {
    isHomeSearch: function () {
      return this.$store.state.isHomeSearch;
    },
  },
  watch: {
    $route(to, from) {
      // if(to.meta.index == from.meta.index){
        // this.transitionName = null;
        if (to.meta.index > from.meta.index) {
          this.transitionName = "slide-left";
          // console.log(11)
        } else if (to.meta.index < from.meta.index){
          this.transitionName = "slide-right";
          // console.log(22)
        }
        else{
          this.transitionName = "kong";
        }
    },
  },
};
</script>
<style  lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  // position: relative;
  .loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: white;
    .box{
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      img{
        width: 50px;
      }
      h1{
        font-size: 18px;
      }
    }
  }
}
.van-toast {
  padding: 10px !important;
  .van-toast__text{
    font-size: 16px;
  }
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  // opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  // opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.kong-enter,
.kong-leave-active{
  transition: all 0s ease;
}




// .left-enter{transform:translate(100%);}
// .left-enter-to{transform:translate(0);}
// .left-enter-active{transition:1s;}
// .left-leave{transform:translate(0);}
// .left-leave-to{transform:translate(-100%);}
// .left-leave-active{transition:1s;}
// .right-enter{transform:translate(-100%);}
// .right-enter-active{transition:1s;}
// .right-leave-to{transform:translate(100%);}
// .right-leave-active{transition:1s;}


:root {
  --animate-duration: 400ms;
  --animate-delay: 0.4s;
}
</style>
