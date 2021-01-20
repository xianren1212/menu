<template>
  <div class="meRegister">
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
        <h1>注册</h1>
      </div>
    </div>

    <div class="box">
      <div class="userMessage">
        <div class="name">
          <span>用户名：</span>
          <input type="text" placeholder="请输入用户名" v-model="name" />
        </div>
        <div class="pwd">
          <span>设置密码：</span>
          <input
            type="text"
            placeholder="请输入登录密码(不少于6位数)"
            v-model="pwd1"
          />
        </div>
        <div class="affirmpwd">
          <span>确认密码：</span>
          <input type="text" placeholder="再次输入登录密码" v-model="pwd2" />
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
              fill="#dbdbdb"
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
        <button
          @click="adduserMessage({ name: name, pwd: pwd2 })"
          :class="{ current: isCurrent }"
        >
          完成
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      isIcon: true,
      isCurrent: false,
      name: '',
      pwd1: '',
      pwd2: '',
    };
  },
  activated() {
    (this.name = ""), (this.pwd1 = ""), (this.pwd2 = "");
    this.isIcon = true;
    this.isCurrent = false
  },
  methods: {
    adduserMessage: function (user) {
      if (this.name == "" || this.pwd1 == "" || this.pwd2 == "") {
        Toast({
          message: "请输入完全部内容",
          position: "top",
          duration: 1000,
        });
      } else {
        if (this.pwd1.length < 6) {
          Toast({
            message: "密码少于6位数",
            position: "top",
            duration: 1000,
          });
        } else {
          if (this.pwd1 !== this.pwd2) {
            Toast({
              message: "请再次确认密码",
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
              Toast({
                message: "注册成功",
                position: "top",
                duration: 1000,
              });

              this.$store.commit("adduserMessage", user);
              this.$store.commit("updateIsUser", [false,user.name]);

              setTimeout(() => {
                this.$router.back();
              }, 1200);
            }
          }
        }
      }
    },
  },
  updated() {
    if (!(this.name == "" || this.pwd1 == "" || this.pwd2 == "" || this.isIcon == true)) {
      this.isCurrent = true;
    }
  },
};
</script>

<style lang="less">
.meRegister {
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
      .pwd,
      .affirmpwd {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px 0;
        font-size: 18px;
        margin-bottom: 5px;
        // background: red;
        span {
          width: 25%;
          text-align: right;
          font-size: 19px;
        }
        input {
          padding-top: 5px;
          flex: 1;
          height: 40px;
          line-height: 40px;
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