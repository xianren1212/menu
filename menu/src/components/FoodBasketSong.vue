<template>
  <div>
    <div class="foodBasket">
      <div class="clear">
        <span @click="isClearHint = true">清空</span>
      </div>
      <van-tabs
        v-model="active"
        title-active-color="#f4a100"
        animated
        color="#f4a100"
        line-width="80"
      >
        <van-tab title="按材料查看">
          <div class="default" v-if="classIfy.length == 0">
            <h2>经常买完菜回家，才发现忘记了买XO</h2>
            <!-- <h1
              v-if="isUser[0]"
              @click="
                $router.push({
                  path: '/register',
                })
              "
            >
              立即启用
            </h1> -->
            <p>(把菜谱中的原料放进“菜篮子”里，买菜的时候就不会漏掉原料啦)</p>
          </div>
          <div v-else>
            <div
              class="materials"
              v-for="(itema, index) in foodMaterial"
              :key="index"
            >
              <div class="materials-details">
                <h1>{{ itema.name }}</h1>
                <ul>
                  <li v-for="(itemb, index) in itema.dosage" :key="index">
                    <div>
                      <span> {{ itema.name }}({{ itema.fName[index] }}) </span>
                      <span>
                        {{ itemb }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="按菜品查看 ">
          <div class="default" v-if="classIfy.length == 0">
            <h2>经常买完菜回家，才发现忘记了买XO</h2>
            <!-- <h1
              v-if="isUser[0]"
              @click="
                $router.push({
                  path: '/register',
                })
              "
            >
              立即启用
            </h1> -->
            <p>(把菜谱中的原料放进“菜篮子”里，买菜的时候就不会漏掉原料啦)</p>
          </div>
          <div v-else>
            <!-- <transition
                name="custom-classes-transition"
                enter-active-class="animate__animated animate__slideInRight"
                leave-active-class="animate__animated animate__slideOutRight"
              > -->
            <div class="variety" v-for="(item, index) in classIfy" :key="index" @click="navigateToFoodlist(item.id,item.infos,item)">
              <div class="heder">
                <div class="left">
                  <div
                    class="img"
                    :style="{
                      backgroundImage:
                        'url(' +
                        'https://pic.ecook.cn/web/' +
                        item.imageid +
                        '.jpg!wd320' +
                        ')',
                    }"
                  ></div>
                </div>
                <div class="right">
                  <h3>{{ item.name }}</h3>
                  <p @click="$store.commit('deleClassIfy', item)">移除</p>
                </div>
              </div>
              <div class="demand">
                <ul>
                  <li
                    v-for="(material, index) in item.materialList"
                    :key="index"
                  >
                    <span>{{ material.name }}</span>
                    <span>{{ material.dosage }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- </transition> -->
          </div>
        </van-tab>
      </van-tabs>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div class="clearHint" v-if="isClearHint">
          <div class="box">
            <div class="top">
              <h1>温馨提示</h1>
              <h2>你确定要删除吗</h2>
            </div>
            <div class="bottom">
              <div class="left">
                <span @click="isClearHint = false">取消</span>
              </div>
              <div class="right">
                <span
                  @click="
                    $store.commit('clearClassIfy');
                    isClearHint = false;
                  "
                  >确认</span
                >
              </div>
            </div>
          </div>
          <div class="shade"></div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: null,
      isClearHint: false,
      newArr: [],
    };
  },
  methods: {
    navigateToFoodlist: function (id,infos) {
      // console.log(infos)
      this.$router.push({
        path: "/foodListItemDetails",
        query: { id },
      });
      this.$store.commit("updateInfos",infos);
    },
  },
  computed: {
    classIfy: function () {
      return this.$store.state.classIfy;
    },
    foodMaterial: function () {
      return this.$store.state.foodMaterial;
    },
    // isUser: function () {
    //   return this.$store.state.isUser;
    // },
  },
};
</script>
<style lang="less">
.foodBasket {
  width: 100%;
  .clear {
    width: 100%;
    padding: 7px;
    text-align: right;
    span {
      font-size: 18px;
      color: #f4a100;
    }
  }
  .van-tabs {
    background-color: white;
    .van-tabs__wrap {
      width: 100%;
      height: 6vh;
      .van-tabs__nav {
        .van-tab {
          .van-tab__text {
            font-size: 18px;
          }
        }
      }
    }
    .van-tabs__content {
      .van-tabs__track {
        .van-tab__pane-wrapper {
          .van-tab__pane {
            width: 100%;
            height: 80vh;
            overflow: scroll;
            .default {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-top: 50%;
              h2,
              h1 {
                font-size: 17px;
                width: 100%;
                margin-bottom: 10px;
              }
              h1 {
                color: rgb(244, 161, 0);
              }
              p {
                width: 80%;
                font-size: 15px;
                color: #707070;
              }
            }
            .variety {
              width: 100%;
              padding: 20px 10px;
              margin-bottom: 20px;
              .heder {
                display: flex;
                width: 100%;
                align-items: center;
                .left {
                  .img {
                    width: 15vw;
                    height: 15vw;
                    border-radius: 10%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  }
                }
                .right {
                  flex: 1;
                  display: flex;
                  h3 {
                    padding-left: 15px;
                    text-align: left;
                    flex: 1;
                    font-weight: bold;
                  }
                  p {
                    color: #f4a100;
                  }
                }
              }
              .demand {
                width: 100%;
                margin-top: 20px;
                ul {
                  li {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    background-color: #f1f1f1;
                    padding: 0 10px;
                    span {
                      width: 50%;
                    }
                    :nth-child(1) {
                      text-align: left;
                    }
                    :nth-child(2) {
                      text-align: right;
                    }
                  }
                }
              }
            }
            .materials {
              width: 100%;
              padding: 12px 10px;
              .materials-details {
                width: 100%;
                h1 {
                  text-align: left;
                  font-size: 17px;
                  width: 100%;
                  height: 50px;
                  line-height: 50px;
                  font-weight: bold;
                  padding-left: 10px;
                }
                ul {
                  li {
                    padding-bottom: 10px;
                    div {
                      display: flex;
                      width: 100%;
                      height: 50px;
                      line-height: 50px;
                      background-color: #f1f1f1;
                      padding: 0 10px;
                      :nth-child(1) {
                        text-align: left;
                        width: 80%;
                      }
                      :nth-child(2) {
                        width: 20%;
                        text-align: right;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .clearHint {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    .box {
      width: 60%;
      background-color: white;
      border-radius: 15px;
      position: relative;
      z-index: 100;
      .top {
        padding: 20px 0;
        h1 {
          font-size: 18px;
          font-weight: bold;
        }
        h2 {
          font-size: 14px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        .left,
        .right {
          width: 50%;
          padding: 10px 0;
          border-top: 1px solid #ccc;
          color: #4374d6;
        }
        .right {
          border-left: 1px solid #ccc;
        }
      }
    }
    .shade {
      width: 100%;
      height: 100%;
      background-color: rgba(133, 133, 133, 0.2);
      position: fixed;
      z-index: 88;
    }
  }
}
</style>
