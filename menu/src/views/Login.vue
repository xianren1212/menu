<template>
  <div class="meLogin">
    <div class="top">
      <div class="svg" @click="$router.back()">
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
        <h1>登录</h1>
      </div>
    </div>
    <div class="box">
      <div class="userMessage">
        <div class="name">
          <div class="svg">
            <svg
              t="1610525411117"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9092"
              width="30"
              height="30"
            >
              <path
                d="M724.350707 63.353535H297.787475C253.310707 63.353535 217.212121 99.555556 217.212121 143.928889v736.245656c0 44.476768 36.20202 80.575354 80.575354 80.575354h426.563232c44.476768 0 80.575354-36.20202 80.575354-80.575354V143.928889c0-44.476768-36.098586-80.575354-80.575354-80.575354zM297.787475 104.727273h426.563232c21.617778 0 39.201616 17.583838 39.201616 39.201616V179.717172H258.585859v-35.788283C258.585859 122.311111 276.169697 104.727273 297.787475 104.727273zM258.585859 221.090909h505.069899v527.72202H258.585859V221.090909z m465.764848 698.285253H297.787475c-21.617778 0-39.201616-17.583838-39.201616-39.201617v-89.987878h505.069899v89.987878c-0.103434 21.617778-17.687273 39.201616-39.305051 39.201617z m0 0"
                p-id="9093"
                fill="#515151"
              ></path>
              <path
                d="M435.975758 149.721212h150.083232c8.274747 0 14.99798-6.723232 14.99798-14.99798 0-8.274747-6.723232-14.99798-14.99798-14.997979H435.975758c-8.274747 0-14.99798 6.723232-14.99798 14.997979 0 8.274747 6.723232 14.99798 14.99798 14.99798z m0 0M457.490101 855.660606c0 19.135354 10.214141 36.822626 26.789495 46.403232 16.575354 9.567677 37.003636 9.567677 53.57899 0a53.575111 53.575111 0 0 0 26.789495-46.403232c0-29.595152-23.983838-53.57899-53.57899-53.57899-29.595152 0-53.57899 23.983838-53.57899 53.57899z m0 0"
                p-id="9094"
                fill="#515151"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="name"
            v-model="name"
            placeholder="手机号/Email(区分大小写)"
            autocomplete="off"
          />
        </div>
        <div class="pwd">
          <div class="svg">
            <svg
              t="1610525363834"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8085"
              width="25"
              height="25"
            >
              <path
                d="M505.856 530.944c68.096 65.024 70.656 173.056 5.632 241.152-65.024 68.096-173.056 70.656-241.152 5.632-68.096-65.024-70.656-173.056-5.632-241.152 65.024-68.096 173.056-70.656 241.152-5.632z m-203.264 41.472c-45.056 47.104-43.52 121.856 4.096 166.912 47.104 45.056 121.856 43.52 166.912-4.096 45.056-47.104 43.52-121.856-4.096-166.912-47.104-44.544-121.856-43.008-166.912 4.096z m249.344-261.12l121.856-127.488c-31.232-30.208-32.768-79.872-2.56-111.104s79.872-32.768 111.104-2.56l70.144-63.488s82.432-13.312 120.32 23.04c37.888 36.352 45.568 135.168 45.568 135.168l-295.424 309.76c75.776 141.312 56.832 320.512-59.904 442.368-44.032 46.08-96.256 78.336-152.576 97.28l-1.536-55.296c42.496-16.896 82.432-42.496 115.712-77.824 96.256-100.864 115.2-246.784 59.392-366.08l-27.648-47.104L951.808 158.72s-0.512-59.904-20.48-78.848c-17.92-16.896-74.24-11.776-74.24-11.776l-72.704 75.776-37.888-36.352c-10.24-10.24-27.136-9.728-36.864 1.024-10.24 10.24-9.728 27.136 1.024 36.864l37.888 36.352-187.904 196.608-46.592-27.136c-121.344-50.176-266.752-24.576-363.008 76.288-125.44 131.072-120.32 338.944 10.24 463.872 40.448 38.4 88.064 64.512 138.24 78.336l1.024 54.272c-64-14.848-124.928-46.08-175.616-94.72-152.064-144.896-157.696-386.048-12.288-537.6 116.736-122.368 294.912-149.504 439.296-80.384z"
                fill="#515151"
                p-id="8086"
              ></path>
              <path
                d="M388.096 772.096H419.84V824.32h-31.744z"
                fill="#515151"
                p-id="8087"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="pwd"
            v-model="pwd"
            placeholder="请输入密码"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="affirm">
        <div class="text">
          <svg
            v-if="isIcon"
            @click="isIcon = !isIcon"
            t="1610526271973"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10541"
            width="16"
            height="16"
          >
            <path
              d="M509.97 0C228.28 0 0 227.505 0 508.204c0 280.717 228.281 508.222 509.97 508.222 281.67 0 509.97-227.505 509.97-508.222C1019.94 227.504 791.657 0 509.97 0z m208.472 303.334a35.663 35.663 0 0 1 50.6 0.105 35.663 35.663 0 0 1 0.088 50.53L411.065 711.892l-0.406 0.406c-2.383 2.578-5.279 4.767-8.474 6.638a35.946 35.946 0 0 1-48.905-13.4L244.93 516.449a35.593 35.593 0 0 1 13.348-48.728 35.84 35.84 0 0 1 48.904 13.294l85.063 148.392 326.197-326.073z"
              fill="#bfbfbf"
              p-id="10542"
            ></path>
          </svg>
          <svg
            v-else
            @click="isIcon = !isIcon"
            t="1610526271973"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10541"
            width="16"
            height="16"
          >
            <path
              d="M509.97 0C228.28 0 0 227.505 0 508.204c0 280.717 228.281 508.222 509.97 508.222 281.67 0 509.97-227.505 509.97-508.222C1019.94 227.504 791.657 0 509.97 0z m208.472 303.334a35.663 35.663 0 0 1 50.6 0.105 35.663 35.663 0 0 1 0.088 50.53L411.065 711.892l-0.406 0.406c-2.383 2.578-5.279 4.767-8.474 6.638a35.946 35.946 0 0 1-48.905-13.4L244.93 516.449a35.593 35.593 0 0 1 13.348-48.728 35.84 35.84 0 0 1 48.904 13.294l85.063 148.392 326.197-326.073z"
              fill="#1296db"
              p-id="10542"
            ></path>
          </svg>
          <p>阅读并且同意<span>用户协议</span>和<span>隐私协议</span></p>
        </div>
        <button @click="userLogin" :class="{ current: isCurrent }">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "",
      pwd: "",
      isIcon: true,
      isCurrent: false,
    };
  },
  computed: {
    userMessage: function () {
      return this.$store.state.userMessage;
    },
  },
  methods: {
    userLogin: function () {
      if (this.name == "" || this.pwd == "") {
        Toast({
          message: "请输入完全部内容",
          position: "top",
          duration: 1000,
        });
      } else {
        if (this.isIcon) {
          Toast({
            message: "请勾选阅读协议",
            position: "top",
            duration: 1000,
          });
        } else {
          if (!this.userMessage.find((item) => item.name == this.name)) {
            console.log("用户不存在");
            Toast({
              message: "用户不存在",
              position: "top",
              duration: 1000,
            });
          } else if (
            this.userMessage.find(
              (item) => item.pwd == this.pwd && item.name == this.name
            )
          ) {
            // console.log("登录成功");
            Toast({
              message: "登录成功",
              position: "top",
              duration: 1000,
            });

            this.$store.commit("updateIsUser", [false,this.name]);
            // this.$store.commit("adduserMessage", user);


            setTimeout(() => {
              this.$router.back();
            }, 1200);
          } else {
            // console.log("密码不正确");
            Toast({
              message: "密码不正确",
              position: "top",
              duration: 1000,
            });
          }
        }
      }
    },
  },
  updated() {
    if (
      !(
        this.name == "" ||
        this.pwd1 == "" ||
        this.pwd2 == "" ||
        this.isIcon == true
      )
    ) {
      this.isCurrent = true;
    }
  },

  activated() {
    this.name = "";
    this.pwd = "";
    this.isIcon = true;
    this.isCurrent = false;
    // console.log(this.userMessage)
  },
};
</script>

<style lang="less">
.meLogin {
  width: 100%;
  height: 100vh;
  background: white;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10px;
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
    margin-top: 60px;
    .userMessage {
      width: 100%;
      .name,
      .pwd {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px 0;
        .svg {
          width: 10%;
          text-align: left;
        }
        input {
          flex: 1;
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          border: none;
        }
        input::-webkit-input-placeholder {
          color: #979797;
        }
      }
    }
    .affirm {
      margin-top: 30px;
      width: 100%;
      .text {
        width: 100%;
        display: flex;
        padding-left: 10px;
        align-items: center;
        p {
          padding-left: 10px;
          color: #707070;
          span {
            color: #f4a100;
          }
        }
      }
      button {
        margin-top: 15px;
        width: 100%;
        border: none;
        height: 50px;
        border-radius: 5px;
        color: white;
        background: #dbdbdb;
        font-size: 18px;
      }
      .current {
        background-color: #07c160;
      }
    }
  }
}
</style>