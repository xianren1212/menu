<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <div class="kitchenStories">
      <div class="top">
        <div class="svg" @click="$router.back()">
          <svg
            t="1609324708219"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3123"
            width="25"
            height="25"
            class="icon"
          >
            <path
              d="M277.818 543.962l401.629 384.163c18.504 17.681 48.475 17.68 66.947 0s18.474-46.361 0-64.043l-368.194-352.129 368.194-352.155c18.474-17.68 18.474-46.331 0-64.012-18.474-17.682-48.444-17.682-66.947 0l-401.629 384.163c-18.504 17.652-18.504 46.331 0 64.012z"
              p-id="3124"
              fill="#707070"
            ></path>
          </svg>
        </div>
        <div class="title"><h1>厨房故事</h1></div>
      </div>

      <van-pull-refresh
        v-model="isLoading"
        pulling-text="下拉可以刷新"
        loosing-text="松开立即刷新"
        loading-text="正在刷新数据中..."
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <div class="box" v-if="story.length != 0">
          <div class="stories" v-for="(item, index) in story" :key="index">
            <p>{{ item.title }}</p>
            <div>
              <img
                :src="
                  'https://pic.ecook.cn/web/' + item.imageids + '.jpg!wd320'
                "
                alt=""
              />
            </div>
            <h3>来自 {{ item.author }}</h3>
          </div>
        </div>
      </van-pull-refresh>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      story: [],
      num: 0, //3014-3044
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
    getData(){
      this.$root.isShowLoading = true;

    this.axios
      .get("getArticleList.shtml?id=" + this.num)
      .then((response) => {
        // console.log(response);
        this.story = response.data.list;
        // console.log(this.story);
      })
      .finally(() => {
        this.$root.isShowLoading = false;
      });
    }
  },
  activated() {
    this.getData()
  },
};
</script>
<style lang="less">
.kitchenStories {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  .van-pull-refresh__head{
    position: absolute;
    top: 52px;
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
  .box {
    width: 100%;
    padding: 60px 10px 10px 10px;
    .stories {
      margin-bottom: 30px;
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 19px;
        text-align: left;
      }
      div {
        width: 100%;
        margin-top: 10px;
        img {
          width: 100%;
        }
      }
      h3 {
        margin-top: 5px;
        width: 100%;
        text-align: left;
        color: #707070;
      }
    }
  }
}
</style>