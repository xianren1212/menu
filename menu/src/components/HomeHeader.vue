<template>
  <div class="homeHeader">
    <div class="carousel">
      <van-swipe :autoplay="3000" :loop="true" indicator-color="white">
        <van-swipe-item
          v-for="(image, index) in bannerlist"
          :key="index"
          @click="LunbonavigateToFoodlist(image)"
        >
          <img
            v-lazy="'https://pic.ecook.cn/web/' + image.imageid + '.jpg!wd320'"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="foodClass">
      <div class="top">
        <div class="breakfast" @click="navigateToFoodlist(7136465)">
          <span>早餐</span>
        </div>
        <div class="lunch" @click="navigateToFoodlist(7136466)">
          <span>午餐</span>
        </div>
      </div>
      <div class="buttom">
        <div class="supper" @click="navigateToFoodlist(246877422)">
          <span> 晚餐 </span>
        </div>
        <div class="hot-all">
          <div class="hot" @click="navigateToFoodlist(7136526)">
            <span> 热门<br />菜谱 </span>
          </div>
          <div class="all" @click="navigateToClassify">
            <span> 全部<br />分类 </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  props: ["bannerlist"],
  // data() {
  //   return {
  //     value: null,
  //   };
  // },
  methods: {
    navigateToFoodlist: function (id) {
      this.$router.push({
        path: "/foodList",
        query: { id },
      });
    },
    navigateToClassify: function () {
      this.$router.push({
        path: "/classify",
      });
    },
    LunbonavigateToFoodlist: function (image) {
      let id = image.url.substring(17);
      // console.log(id);
      this.$router.push({
        path: "/foodList",
        query: { id },
      });
    },
  },
};
</script>
<style lang="less">
.homeHeader {
  width: 100%;
  background-color: white;
  position: relative;
  z-index: 4;
  .carousel {
    padding: 10px;
    width: 100%;
    padding-top: 60px;
    .van-swipe {
      width: 100%;
      height: 30vh;
      .van-swipe__track {
        width: 100%;
        .van-swipe-item {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      .van-swipe__indicators {
        i {
          width: 8px;
          height: 8px;
          // background-color: #ccc;
        }
      }
    }
  }
  .foodClass {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    .top {
      display: flex;
      width: 100%;
      div {
        width: 49%;
        height: 90px;
        line-height: 90px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right center;
        text-align: left;
        span {
          font-size: 18px;
          margin-left: 40px;
        }
      }
      div.breakfast {
        margin-right: 2%;
        background-image: url(../assets/image/breakfast.png);
      }
      div.lunch {
        background-color: #fca5a7;
        background-image: url(../assets/image/lunch.png);
      }
    }
    .buttom {
      width: 100%;
      display: flex;
      margin-top: 10px;
      > div {
        width: 49%;
        height: 90px;
      }
      div.supper {
        margin-right: 2%;
        line-height: 90px;
        background-image: url(../assets/image/supper.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right center;
        text-align: left;
        span {
          font-size: 18px;
          margin-left: 40px;
        }
      }
      div.hot-all {
        display: flex;
        div {
          width: 49%;
          height: 90px;
          line-height: 150%;
          background-color: red;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: block;
            color: white;
            font-size: 18px;
          }
        }
        .hot {
          margin-right: 4%;
          background-color: #ed9371;
        }
        .all {
          background-color: #ccbca9;
        }
      }
    }
  }
}
</style>