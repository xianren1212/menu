<template>
    <div class="foodListItemDetailsSong" v-if="details">
      <div class="header">
        <div
        v-if="details.imageid"
          class="topbj"
          :style="{
            backgroundImage:
              'url(' +
              'https://pic.ecook.cn/web/' +
              details.imageid +
              '.jpg!wd320' +
              ')',
          }"
        ></div>
        <h1>{{ details.name }}</h1>
        <h3>
          已有<span >{{infos ? infos.likeCount : " " }}</span
          >人点赞 已有<span >{{infos ? infos.collectionCount : " "}}</span
          >人收藏
        </h3>
        <div class="user">
          <div
            class="usericon"
            :style="{
              backgroundImage:
                'url(' +
                'https://pic.ecook.cn/web/' +
                details.authorimageid +
                '.jpg!wd320' +
                ')',
            }"
          ></div>
        </div>
        <h6>{{ details.authorname }}</h6>
        <div class="myP">
          <h3 class="one">
            <svg
              class="one"
              t="1609342598699"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2500"
              width="20"
              height="20"
            >
              <path
                d="M956 224.8c12-6 24-18 36-30l-72.1-84.1C685.8 260.9 547.7 423 505.7 597.1c-12 48-24 138.1 18 204.1v6c6 6 6 12 12 18s12 18 18 24l24 24c6 0 6 6 12 6 6 6 12 6 18 12 24 12 54 18 84.1 18 108.1 0 198.1-90.1 198.1-198.1S799.9 513 691.8 513c36-90 120.1-186.1 264.2-288.2zM493.6 224.8c12-6 24-18 36-30l-72.1-78.1C223.5 266.9 85.4 429 43.3 603.1c-12 48-24 138.1 18 204.1v6c6 6 6 12 12 18s12 18 18 24l24 24c6 0 6 6 12 6 6 6 12 6 18 12 24 12 54 18 84.1 18 108.1 0 198.1-90.1 198.1-198.1s-90-198.1-198-198.1c36-96 120-192.1 264.1-294.2z"
                p-id="2501"
                fill="#bfbfbf"
              ></path>
            </svg>
          </h3>
          <p>{{ details.description }}</p>
          <h3 class="two">
            <svg
              t="1609342598699"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2500"
              width="20"
              height="20"
            >
              <path
                d="M956 224.8c12-6 24-18 36-30l-72.1-84.1C685.8 260.9 547.7 423 505.7 597.1c-12 48-24 138.1 18 204.1v6c6 6 6 12 12 18s12 18 18 24l24 24c6 0 6 6 12 6 6 6 12 6 18 12 24 12 54 18 84.1 18 108.1 0 198.1-90.1 198.1-198.1S799.9 513 691.8 513c36-90 120.1-186.1 264.2-288.2zM493.6 224.8c12-6 24-18 36-30l-72.1-78.1C223.5 266.9 85.4 429 43.3 603.1c-12 48-24 138.1 18 204.1v6c6 6 6 12 12 18s12 18 18 24l24 24c6 0 6 6 12 6 6 6 12 6 18 12 24 12 54 18 84.1 18 108.1 0 198.1-90.1 198.1-198.1s-90-198.1-198-198.1c36-96 120-192.1 264.1-294.2z"
                p-id="2501"
                fill="#bfbfbf"
              ></path>
            </svg>
          </h3>
        </div>
      </div>
      <div class="materials">
        <h1>— 需要材料 —</h1>
        <div class="materials-details">
          <ul>
            <li v-for="(item, index) in details.materialList" :key="index">
              <span>{{ item.name }}</span>
              <span>{{ item.dosage }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="step">
        <h1>— 烹饪步骤 —</h1>
        <div class="step-list">
          <ul>
            <li v-for="(item, index) in details.stepList" :key="index">
              <div class="left">{{ index + 1 }}</div>
              <div class="right">
                <img
                  :src="
                    'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'
                  "
                  alt=""
                />
                <p>{{ item.details }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="correlation">
        <h1>— 菜谱相关 —</h1>
        <ul>
          <li
            v-for="(item, index) in correlation"
            :key="index"
            @click="navigateToDetailsSong(item.url)"
          >
            <div class="left">
              <img
                :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
                alt=""
              />
            </div>
            <div class="right">
              <p>{{ item.title }}</p>
              <span>{{ item.subtitle }}</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: ["details", "correlation"],
  data() {
    return {
      id: null,
    };
  },
  computed: {
    infos: function () {
      return this.$store.state.infos;
    },
  },
  methods: {
    navigateToDetailsSong: function (url) {
      // console.log(url)
      this.id = url.substring(18);
      // console.log(this.id);
      this.$router.push({
        path: "/foodListItemDetails",
        query: { id: this.id },
      });
    },
    // 处理id变化内容不会变化的问题，重新请求数据来解决
    getDetailsData: function () {
      // 当前的菜谱详情
      this.$root.isShowLoading = true;
      this.axios
        .get("getRecipeListByIds.shtml?ids=" + this.id)
        .then((response) => {
          this.$emit("update:details", response.data.list[0]);
          // console.log(response.data.list[0])
        })
        .finally(() => {
          this.$root.isShowLoading = false;
        });
      // 菜谱相关
      this.axios
        .get("getRecipeRelatedList.shtml?id=" + this.id)
        .then((response) => {
          this.$emit("update:correlation", response.data.list);
          // console.log(response.data.list)
        })
        .finally(() => {
          this.$root.isShowLoading = false;
        });
    },
  },
  // 解决菜谱相关跳转相同的路由页面无数据的问题
  watch: {
    // 监听当前路由
    $route: function (n, o) {
      // console.log(n,o)
      o
    // 路由变化时候调用数据请求，有id并且还要是当前页面
      if(this.$route.query.id && this.$route.meta.index == 2){
        this.id = n.query.id;
      }
    },
    // id变化时候调用数据请求，重新获得数据,并且是当前的页面id变化，不然他会一直执行
    id: function () {
      if(this.$route.query.id && this.$route.meta.index == 2){
        // console.log(111)
        this.getDetailsData();
      }
    },
  },
};
</script>

<style lang='less'>
  .foodListItemDetailsSong {
    width: 100%;
    margin-top: 50px;
    background: white;
    position: relative;
    .header {
      width: 100%;
      .topbj {
        width: 100%;
        height: 30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      h1 {
        margin: 20px 0;
        font-size: 20px;
      }
      h3 {
        margin: 15px 0;
        font-size: 14px;
        color: #a2a2a2;
      }
      .user {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0;
        .usericon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
      h6 {
        color: #707070;
        margin: 15px 0;
      }
      .myP {
        p {
          line-height: 150%;
          padding: 0 20px;
          margin: -10px 0;
          text-align: left;
          color: #707070;
        }
        h3 {
          width: 100%;
          height: 20px;
        }
        .one {
          text-align: left;
        }
        .two {
          svg {
            transform: rotate(180deg);
          }
          text-align: right;
        }
      }
    }
    .materials {
      margin-top: 50px;
      width: 100%;
      h1 {
        font-size: 18px;
      }
      .materials-details {
        width: 100%;
        ul {
          margin-top: 10px;
          li:nth-of-type(2n - 1) {
            background-color: #f1f1f1;
          }
          li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            display: flex;
            padding-left: 5px;
            :last-child {
              flex: 1;
            }
            span:nth-of-type(1) {
              width: 70%;
              text-align: left;
            }
            span:nth-of-type(2) {
              width: 30%;
            }
          }
        }
      }
    }
    .step {
      margin-top: 100px;
      width: 100%;
      h1 {
        font-size: 18px;
        margin-bottom: 30px;
      }
      li {
        width: 100%;
        display: flex;
        margin-top: 30px;
        .left {
          width: 10%;
          font-size: 20px;
          font-weight: bold;
        }
        .right {
          width: 85%;
          img {
            width: 100%;
          }
          p {
            width: 100%;
            margin-top: 5px;
            text-align: left;
          }
        }
      }
    }
    .correlation {
      margin-top: 50px;
      width: 100%;
      h1 {
        font-size: 18px;
      }
      li {
        width: 100%;
        display: flex;
        margin-top: 30px;
        align-items: center;
        .left {
          width: 20%;
          img {
            width: 100%;
            border-radius: 10%;
          }
        }
        .right {
          width: 75%;
          text-align: left;
          margin-left: 5%;
          p {
            font-size: 18px;
          }
          span {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #8a8a8a;
          }
        }
      }
    }
  }

</style>