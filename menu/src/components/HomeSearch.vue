<template>
    <div class="homeSearch" v-if="isHome">
      <div class="homeSearchBox">
        <div class="search">
          <div class="svg">
            <svg
              t="1609993908887"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4025"
              width="23"
              height="23"
            >
              <path
                d="M948.606381 949.702853c-10.901281 10.901281-28.562523 10.901281-39.46278 0L663.79673 704.370309c-63.452147 54.399981-145.758712 87.473237-235.891522 87.473237-200.37768 0-362.816283-162.439626-362.816283-362.815259 0-200.37768 162.438603-362.815259 362.816283-362.815259 200.37461 0 362.814236 162.437579 362.814236 362.815259 0 90.131787-33.059953 172.413791-87.460957 235.863892l245.347894 245.360174C959.507662 921.141354 959.507662 938.815899 948.606381 949.702853zM734.903208 429.02931c0-169.552627-137.446395-306.996976-306.997999-306.996976-169.552627 0-306.999023 137.444349-306.999023 306.996976S258.352581 736.026286 427.905208 736.026286C597.456812 736.026286 734.903208 598.580914 734.903208 429.02931z"
                p-id="4026"
                fill="#cdcdcd"
              ></path>
            </svg>
          </div>
          <div class="inp">
            <input
              type="text"
              placeholder="搜索 菜谱/食材"
              v-focus
              v-model="something"
              @keyup.enter="KeyCallElse"
            />
            <div
              v-if="isXx"
              class="xx"
              @click="
                something = '';
                isSerchItem = false;
              "
            >
              x
            </div>
          </div>
          <div class="cancel">
            <span @click="$store.commit('updateIsHomeSearch', false)"
              >取消</span
            >
          </div>
        </div>
        <div class="history">
          <div class="top">
            <svg
              t="1609994704521"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8350"
              width="21"
              height="21"
            >
              <path
                d="M512 0a512 512 0 1 0 512 512 512 512 0 0 0-512-512z m254.1568 766.088533a30.037333 30.037333 0 0 1-42.496 0l-241.698133-241.698133V218.8288a30.037333 30.037333 0 0 1 60.074666 0v280.814933l224.0512 223.982934a30.037333 30.037333 0 0 1 0 42.496z m0 0"
                fill="#ed9145"
                p-id="8351"
              ></path>
            </svg>
            <h1>历史搜索</h1>
          </div>
          <div class="midle">
            <div
              v-for="item in historyList"
              :key="item"
              @click="togoSearchFood(item)"
            >
              {{ item }}
            </div>
          </div>
          <div class="clear" @click="clearHistory">
            <svg
              t="1610021687279"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2521"
              width="23"
              height="23"
            >
              <path
                d="M634.50112 908.99968c0 0.59392-0.062464 1.171456-0.078848 1.7408 0.016384-0.444416 0.141312-0.859136 0.141312-1.296384 0-0.155648-0.047104-0.288768-0.062464-0.444416zM511.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM671.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM351.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32z"
                fill="#dbdbdb"
                p-id="2522"
              ></path>
              <path
                d="M864 160.008192h-64V64c0-35.351552-28.655616-64-64-64h-448c-35.342336 0-64 28.648448-64 64v96.008192h-64c-53.014528 0-96 42.984448-96 96v64h95.937536V928c0 53.014528 42.985472 96 96 96h512c53.015552 0 96-42.985472 96-96V320.008192H960v-64c0-53.016576-42.984448-96-96-96zM288 64h448v95.859712h-448V64z m511.937536 864c0 17.640448-14.358528 32-32 32h-512c-17.640448 0-32-14.359552-32-32V320.008192h576V928z m96-671.991808v15.98976h-768v-15.98976H128c0-17.649664 14.359552-32 32-32h704c17.641472 0 32 14.350336 32 32h-0.062464z"
                fill="#dbdbdb"
                p-id="2523"
              ></path>
            </svg>
            <h1>清除历史搜索</h1>
          </div>
        </div>

        <div class="recommend" v-if="isRecommendList">
          <ul>
            <li
              v-for="(item, index) in recommendList"
              :key="index"
              @click="togoSerchItem(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <SerchItem :foodlist="foodlist" v-if="isSerchItem"></SerchItem>
      </div>
    </div>
</template>

<script>
import SerchItem from "@/components/SerchItem.vue";

export default {
  components: {
    SerchItem,
  },
  data() {
    return {
      something: null,
      recommendList: [],
      isRecommendList: false,
      timer: null,
      historyList: [],
      isXx: false,
      isSerchItem: false,
      foodlist: [],
    };
  },
  computed: {
    isHome: function () {
      return this.$store.state.isHome;
    },
  },
  created() {
    // 每次页面重新进入时候先获取一下历史搜索的记录
    let historyList = JSON.parse(window.localStorage.getItem("historyList"));
    if (historyList) {
      this.historyList = historyList.data;
      // console.log(this.historyList);
    }
  },
  methods: {
    searchFood: function (value) {
      this.recommendList = [];
      this.axios
        .get("prompt.shtml?queryString=" + value + "&terminal=3")
        .then((response) => {
          // console.log(response)
          this.recommendList = response.data.list;
          // console.log(this.recommendList);
        });
    },
    historyListUnshift(value) {
      if (this.something != "") {
        // 根据created获取的历史搜索的记录进行新的搜索记录的插入更新
        // let value = this.something;
        // 去重并且搜索的内容最新显示
        if (this.historyList.indexOf(value) == -1) {
          // console.log("不存在");
          this.historyList.unshift(value);
        } else {
          for (var k in this.historyList) {
            if (this.historyList[k] == value) {
              this.historyList.splice(k, 1);
              this.historyList.unshift(value);
            }
          }
        }

        // console.log(this.historyList);

        window.localStorage.setItem(
          "historyList",
          JSON.stringify({
            data: this.historyList,
          })
        );
      }
    },
    togoSerchItem: function (item) {
      this.foodlist = [];
      this.isSerchItem = true;
      this.axios
        .get(
          "http://api.ecook.cn/public/searchRecipe.shtml?queryString=" + item
        )
        .then((response) => {
          // console.log(response);
          this.foodlist = response.data.contentList;
          // console.log(this.foodlist);
          this.something = item;
          this.historyListUnshift(item);
        });
    },
    // 点击
    togoSearchFood: function (item) {
      this.something = item;
      this.togoSerchItem(item);
      this.historyListUnshift(item);
    },
    // 回车
    KeyCallElse: function () {
      if (this.something !== "") {
        this.togoSerchItem(this.something);
        this.historyListUnshift(this.something);
      }
    },
    // 清除
    clearHistory: function () {
      this.historyList = [];
      window.localStorage.removeItem("historyList");
    },
  },
  watch: {
    something: function (n) {
      // n == '' ? this.isRecommendList = false : this.isRecommendList = true
      if (n == "") {
        this.isRecommendList = false;
        this.isXx = false;
        this.isSerchItem = false;
      } else {
        this.isRecommendList = true;
        this.isXx = true;
        // 防抖
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.searchFood(this.something);
        }, 500);
      }
    },
  },
};
</script>

<style lang="less">
.homeSearch {
  position: fixed;
  z-index: 999;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 10px;
  .homeSearchBox {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: scroll;
    .search {
      width: 100%;
      display: flex;
      height: 50px;
      align-items: center;
      // background-color: blanchedalmond;
      .svg {
        width: 10%;
      }
      .inp {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          height: 70%;
          border-radius: 5px;
          border: none;
        }
        input::-webkit-input-placeholder {
          color: #979797;
        }
        .xx {
          position: absolute;
          top: 17px;
          right: 5px;
          width: 18px;
          height: 18px;
          line-height: 18px;
          background-color: #ccc;
          border-radius: 50%;
          color: white;
        }
      }
      .cancel {
        width: 10%;
      }
    }
    .history {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      .top {
        display: flex;
        align-items: center;
        h1 {
          padding-left: 10px;
          flex: 1;
          text-align: left;
          color: #979797;
        }
      }
      .midle {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        width: 100%;
        div {
          height: 40px;
          padding: 0 10px;
          line-height: 40px;
          background-color: #e9e8e8;
          border-radius: 5px;
          margin-right: 10px;
          margin-top: 10px;
          font-size: 14px;
        }
      }
      .clear {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 30px;
        h1 {
          margin-left: 10px;
          color: #979797;
        }
      }
    }
    .recommend {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 70px;
      left: 0;
      background-color: white;
      padding: 0 10px;
      ul {
        li {
          width: 100%;
          height: 40px;
          line-height: 50px;
          font-size: 18px;
          text-align: left;
          // background-color: wheat;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>