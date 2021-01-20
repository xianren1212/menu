<template>
  <!-- <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  > -->
  <div>
    <div class="FoodListItemDetails">
      <div class="top">
        <div class="black">
          <svg
            @click="toggleHome"
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
          <span>菜谱详情</span>
        </div>
        <div class="collect" @click="toggleCollect()">
          <svg
            v-if="isCollect"
            t="1609243884286"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5586"
            width="25"
            height="25"
            class="icon"
          >
            <path
              d="M286.72 948.906667c-17.066667 0-34.133333-6.826667-47.786667-17.066667-23.893333-20.48-37.546667-54.613333-34.133333-85.333333l37.546667-201.386667-143.36-136.533333c-23.893333-23.893333-27.306667-61.44-23.893334-88.746667 10.24-37.546667 37.546667-61.44 68.266667-64.853333L341.333333 317.44l88.746667-191.146667c20.48-30.72 47.786667-47.786667 81.92-47.786666s61.44 17.066667 78.506667 47.786666l88.746666 191.146667 197.973334 34.133333c30.72 6.826667 58.026667 30.72 68.266666 61.44 10.24 30.72 3.413333 61.44-17.066666 88.746667l-146.773334 143.36 34.133334 201.386667c3.413333 34.133333-6.826667 64.853333-34.133334 85.333333-17.066667 10.24-30.72 17.066667-51.2 17.066667-17.066667 0-34.133333-6.826667-37.546666-10.24L512 843.093333l-184.32 92.16c-13.653333 10.24-27.306667 13.653333-40.96 13.653334z m225.28-819.2c-13.653333 0-23.893333 6.826667-30.72 20.48l-102.4 211.626666-225.28 44.373334c-20.48 3.413333-23.893333 17.066667-27.306667 27.306666 0 10.24 0 30.72 10.24 40.96l163.84 157.013334L256 853.333333c-3.413333 13.653333 3.413333 27.306667 13.653333 37.546667 10.24 6.826667 23.893333 6.826667 34.133334 0l204.8-105.813333 204.8 105.813333c3.413333 3.413333 10.24 3.413333 17.066666 3.413333s13.653333 0 20.48-6.826666c10.24-6.826667 13.653333-23.893333 13.653334-37.546667l-40.96-228.693333 163.84-160.426667c6.826667-10.24 10.24-23.893333 6.826666-40.96-3.413333-13.653333-17.066667-23.893333-27.306666-27.306667l-225.28-40.96-102.4-211.626666c-3.413333-3.413333-13.653333-10.24-27.306667-10.24z"
              fill="#8a8a8a"
              p-id="5587"
            ></path>
          </svg>
          <svg
            v-else
            t="1609844099364"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2556"
            width="25"
            height="25"
          >
            <path
              d="M752.961492 942.423053c-9.69071 0-20.996197-3.229554-30.685883-8.074909l-209.966059-104.980983-211.57572 104.980983c-20.996197 11.304464-48.452525 9.689686-67.833944-4.846378-19.380396-14.544251-30.686906-40.386826-25.841552-64.602344l43.607171-226.110761L84.313779 483.733213c-17.765619-17.770735-24.225751-45.221948-17.765619-67.833945 8.075933-24.228821 27.456329-41.992393 53.29788-45.221947l230.956116-41.992393L454.167339 118.725008c11.310603-22.610974 33.921577-37.149085 58.143234-37.149084 24.226774 0 48.457642 14.538111 58.148352 37.149084l103.365182 209.95992 230.956116 40.379662c24.225751 3.230578 45.221948 20.999266 51.68208 45.225018 8.075933 24.225751 1.6158 50.067302-16.149819 67.833944L773.958712 638.788661l41.99137 226.110761c4.845355 25.840528-6.460132 50.068326-25.841552 64.602344-9.689686 8.076956-22.60995 12.921287-37.147038 12.921287z"
              p-id="2557"
              fill="#f4ea2a"
            ></path>
          </svg>
          <span>收藏</span>
        </div>
        <div class="lanzi" @click="togoLanzi(details)">
          <svg
            v-if="isClassIfy"
            t="1609155046925"
            viewBox="0 0 1154 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4565"
            width="25"
            height="25"
            class="icon"
          >
            <path
              d="M345.556489 253.594081c-10.237952 0-20.475905-2.559488-28.154369-10.237952-15.356929-15.356929-15.356929-38.392322 0-53.74925l148.45031-145.890822c56.308738-56.308738 145.890822-56.308738 202.19956 0l148.45031 145.890822c15.356929 15.356929 15.356929 38.392322 0 53.74925s-38.392322 15.356929-53.749251 0l-148.45031-148.45031c-25.594881-25.594881-66.546691-25.594881-92.141571 0l-148.45031 145.890822c-7.678464 10.237952-17.916417 12.797441-28.154369 12.79744z"
              p-id="4566"
              fill="#707070"
            ></path>
            <path
              d="M38.417916 261.272545c-20.475905 0-38.392322-17.916417-38.392321-38.392321s17.916417-38.392322 38.392321-38.392322h1077.544492c20.475905 0 38.392322 17.916417 38.392321 38.392322s-17.916417 38.392322-38.392321 38.392321h-1077.544492zM573.35093 738.745051c-20.475905 0-38.392322-17.916417-38.392322-38.392322v-214.997c0-20.475905 17.916417-38.392322 38.392322-38.392322s38.392322 17.916417 38.392321 38.392322v214.997c0 23.035393-17.916417 38.392322-38.392321 38.392322zM760.193561 733.626075c-2.559488 0-7.678464 0-10.237952-2.559488-20.475905-5.118976-33.273345-28.154369-25.594881-48.630274l58.868226-207.318537c5.118976-20.475905 28.154369-33.273345 48.630274-25.594881 20.475905 5.118976 33.273345 28.154369 25.594881 48.630274l-58.868226 207.318537c-7.678464 15.356929-23.035393 28.154369-38.392322 28.154369zM389.067786 736.185563c-17.916417 0-33.273345-10.237952-38.392321-28.154369l-56.308738-212.437513c-5.118976-20.475905 7.678464-40.95181 28.154369-46.070786s40.95181 7.678464 48.630274 28.15437l56.308738 212.437512c5.118976 20.475905-7.678464 40.95181-28.154369 46.070786h-10.237953z"
              p-id="4567"
              fill="#707070"
            ></path>
            <path
              d="M883.04899 1024h-614.277144c-92.141572 0-166.366727-74.225155-166.366727-163.807239l-51.189762-614.277144 76.784643-5.118976 51.189762 616.836632c0 48.630274 40.95181 89.582084 89.582084 89.582084h614.277144c48.630274 0 89.582084-40.95181 89.582084-89.582084v-2.559488l51.189762-614.277144 76.784643 5.118976-51.189762 611.717656c0 92.141572-74.225155 166.366727-166.366727 166.366727z"
              p-id="4568"
              fill="#707070"
            ></path>
          </svg>
          <svg
            v-else
            t="1609845415314"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3994"
            width="25"
            height="25"
          >
            <path
              d="M826.502 928.705h-614.213c-7.955 0-14.897-5.374-16.9-13.051l-129.294-497.833c-2.435-9.326 3.173-18.858 12.506-21.283 9.313-2.441 18.87 3.163 21.283 12.508l125.91 484.773h587.206l125.916-484.773c2.435-9.328 11.937-14.913 21.283-12.508 9.328 2.411 14.931 11.949 12.508 21.283l-129.309 497.822c-2.006 7.701-8.932 13.075-16.893 13.075z"
              p-id="3995"
              fill="#707070"
            ></path>
            <path
              d="M642.765 430.866h-246.766c-9.641 0-17.45-7.814-17.45-17.45s7.814-17.45 17.45-17.45h246.766c9.641 0 17.45 7.814 17.45 17.45s-7.809 17.45-17.45 17.45z"
              p-id="3996"
              fill="#707070"
            ></path>
            <path
              d="M159.487 430.866h-76.499c-9.641 0-17.45-7.814-17.45-17.45s7.814-17.45 17.45-17.45h76.499c9.641 0 17.45 7.814 17.45 17.45s-7.814 17.45-17.45 17.45z"
              p-id="3997"
              fill="#707070"
            ></path>
            <path
              d="M955.806 430.866h-76.51c-9.641 0-17.45-7.814-17.45-17.45s7.814-17.45 17.45-17.45h76.51c9.644 0 17.454 7.814 17.454 17.45s-7.814 17.45-17.454 17.45z"
              p-id="3998"
              fill="#707070"
            ></path>
            <path
              d="M527.487 770.303c-9.641 0-17.454-7.814-17.454-17.45v-229.519c0-9.633 7.814-17.45 17.454-17.45 9.633 0 17.45 7.814 17.45 17.45v229.52c-0.001 9.619-7.83 17.447-17.45 17.447z"
              p-id="3999"
              fill="#707070"
            ></path>
            <path
              d="M338.144 769.177c-8.562 0-16.038-6.318-17.269-15.036l-31.947-227.289c-1.344-9.552 5.308-18.384 14.854-19.727 9.514-1.373 18.366 5.306 19.716 14.848l31.947 227.291c1.344 9.552-5.306 18.384-14.848 19.716-0.821 0.125-1.635 0.182-2.452 0.182z"
              p-id="4000"
              fill="#707070"
            ></path>
            <path
              d="M716.799 769.177c-0.804 0-1.634-0.054-2.444-0.164-9.552-1.346-16.195-10.162-14.848-19.727l31.947-227.291c1.344-9.547 10.16-16.231 19.716-14.848 9.552 1.344 16.195 10.162 14.854 19.727l-31.947 227.291c-1.228 8.718-8.704 15.015-17.271 15.015z"
              p-id="4001"
              fill="#707070"
            ></path>
            <path
              d="M338.192 469.284c-5.886 0-11.625-2.975-14.913-8.362l-203.441-333.27c-5.024-8.23-2.435-18.973 5.804-23.993 8.23-5.033 18.973-2.435 23.993 5.804l203.441 333.266c5.024 8.23 2.435 18.965-5.804 23.993-2.835 1.737-5.979 2.566-9.070 2.566z"
              p-id="4002"
              fill="#707070"
            ></path>
            <path
              d="M716.763 469.284c-3.102 0-6.242-0.823-9.070-2.563-8.23-5.024-10.825-15.762-5.804-23.993l203.441-333.266c5.021-8.23 15.757-10.837 23.993-5.804 8.23 5.024 10.833 15.765 5.799 23.993l-203.43 333.267c-3.293 5.381-9.018 8.362-14.913 8.362z"
              p-id="4003"
              fill="#707070"
            ></path>
          </svg>
        </div>
      </div>

      <!-- <Wad :details="details"/> -->
      <!-- <div class="bxo"></div> -->
      <FoodListItemDetailsSong
        :details="details"
        :correlation="correlation"
        @update:details="details = $event"
        @update:correlation="correlation = $event"
      ></FoodListItemDetailsSong>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import FoodListItemDetailsSong from "@/components/FoodListItemDetailsSong.vue";
import { Toast } from "vant";

export default {
  components: {
    FoodListItemDetailsSong,
  },
  data() {
    return {
      // 菜谱详情
      details: null,
      // 菜谱相关
      correlation: null,
      // 收藏的状态
      isCollect: true,
      // 篮子的状态
      isClassIfy: true,
    };
  },
  computed: {
    collect: function () {
      return this.$store.state.collect;
    },
    classIfy: function () {
      return this.$store.state.classIfy;
    },
    infos: function () {
      return this.$store.state.infos;
    },
  },
  // 路由组件销毁时候触发，被 keep-alive 缓存的组件激活时调用。
  deactivated() {
    this.$store.commit("updateisHome", true);
  },
  // $store.commit('updateisHome',true);
  // $router.back();
  methods: {
    toggleHome: function () {
      this.$router.back();
    },
    // 点击时高亮，插入到vuex中的collect数组
    toggleCollect: function () {
      this.isCollect = false;
      // 根据vueX的数组中是否有当前项的值来判断是否收藏
      if (this.collect.find((item) => item.id == this.details.id)) {
        this.isCollect = false;
        // console.log("已收藏");
        Toast({
          message: "已收藏",
          position: "top",
          duration: 1000,
        });
      } else if (!this.isCollect) {
        this.$store.commit("addinfosCollect", this.infos);
        this.addCollect(this.details);
        // console.log("收藏成功");
        Toast({
          message: "收藏成功",
          position: "top",
          duration: 1000,
        });
      }
    },
    addCollect: function (details) {
      this.$store.commit("addCollect", details);
    },

    // 点击时篮子打开，插入到vuex中的classIfy数组
    togoLanzi: function (details) {
      this.isClassIfy = !this.isClassIfy;
      if (this.isClassIfy) {
        this.$store.commit("deleClassIfy", details);
        Toast({
          message: "移除成功",
          position: "top",
          duration: 1000,
          // icon: "../assets/image/correct.png"
        });
      } else {
        this.$store.commit("addClassIfy", details);
        // console.log("添加");
        Toast({
          message: "添加成功",
          position: "top",
          duration: 1000,
          // icon: "../assets/image/correct.png"

        });
      }
    },
  },
  activated() {
    // console.log(222222)
    // 当前的菜谱详情
    // console.log(this.$route.query.item);
    this.$root.isShowLoading = true;
    this.axios
      .get("getRecipeListByIds.shtml?ids=" + this.$route.query.id)
      .then((response) => {
        this.details = response.data.list[0];
        // console.log(this.details);

        // 每次进入路由根据vueX的数组中是否有当前项的值来判断是否收藏
        if (this.collect.find((item) => item.id == this.details.id)) {
          this.isCollect = false;
          // console.log("已收藏");
        } else if (!this.isCollect) {
          this.isCollect = true;
        }

        // // 每次进入路由根据vueX的数组中是否有当前项的值来判断是否在菜篮子中
        if (this.classIfy.find((item) => item.id == this.details.id)) {
          this.isClassIfy = false;
          console.log("已添加");
        } else {
          this.isClassIfy = true;
        }
      })
      .finally(() => {
        this.$root.isShowLoading = false;
      });
    // 菜谱相关
    this.axios
      .get("getRecipeRelatedList.shtml?id=" + this.$route.query.id)
      .then((response) => {
        this.correlation = response.data.list;
        // console.log(this.correlation);
      })
      .finally(() => {
        this.$root.isShowLoading = false;
      });
  },

  // 监听他的路由是否有变化，变化时在进行activated里面的操作，来解决相同的路由不同id，操作只执行一次的问题
  watch: {
    $route: function () {
      // 当前的菜谱详情
      // console.log(this.$route.query.item);
      // console.log(this.$route.query.id ,this.$route.meta)
      if (this.$route.query.id && this.$route.meta.index == 2) {
        this.$root.isShowLoading = true;
        this.axios
          .get("getRecipeListByIds.shtml?ids=" + this.$route.query.id)
          .then((response) => {
            this.details = response.data.list[0];
            // console.log(this.details);

            // 每次进入路由根据vueX的数组中是否有当前项的值来判断是否收藏
            if (this.collect.find((item) => item.id == this.details.id)) {
              this.isCollect = false;
              // console.log("已收藏");
            } else if (!this.isCollect) {
              this.isCollect = true;
            }

            // // 每次进入路由根据vueX的数组中是否有当前项的值来判断是否在菜篮子中
            if (this.classIfy.find((item) => item.id == this.details.id)) {
              this.isClassIfy = false;
              // console.log("已添加");
            } else {
              this.isClassIfy = true;
            }
          })
          .finally(() => {
            this.$root.isShowLoading = false;
          });
        // 菜谱相关
        this.axios
          .get("getRecipeRelatedList.shtml?id=" + this.$route.query.id)
          .then((response) => {
            this.correlation = response.data.list;
            // console.log(this.correlation);
          })
          .finally(() => {
            this.$root.isShowLoading = false;
          });
      }
    },
  },
};
</script>

<style lang="less">
.FoodListItemDetails {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10px;
  .top {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    padding: 10px;
    .black {
      width: 20%;
      height: 100%;
      text-align: left;
      display: flex;
      align-items: center;
    }
    .title {
      flex: 1;
      margin-left: -5%;
      span {
        font-size: 18px;
        margin-left: 20%;
      }
    }
    .collect {
      width: 20%;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
    .lanzi {
      height: 25px;
    }
  }
  .bxo {
    width: 100%;
    height: 500px;
    background-color: red;
  }
}
</style>