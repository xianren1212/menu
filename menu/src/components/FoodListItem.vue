<template>
  <div class="FoodListItem">
    <div
      class="item"
      v-for="(item, index) in song"
      :key="index"
      @click="navigateToFoodlist(item.id,item.infos,item)"
    >
      <div class="banner">
        <div
          class="bj"
          :style="{
            backgroundImage:
              'url(' +
              'https://pic.ecook.cn/web/' +
              item.imageid +
              '.jpg!wd320' +
              ')',
          }"
        ></div>
        <div class="likeCount" v-if="item.infos.likeCount">
          <svg
            t="1609325963201"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4602"
            width="15"
            height="15"
          >
            <path
              d="M839.72295372 433.90324971L630.62642128 433.90324971c81.0224666-299.23611768-55.82515078-314.51945537-55.82515078-314.51945538-58.0016751 0-45.97772695 45.8635043-50.36405273 53.50922051 0 146.33978203-155.43441562 261.01023487-155.43441563 261.01023487l0 414.9948331c0 40.96362656 55.82515078 55.71722373 77.72440255 55.71722373l314.16689443 0c29.56745303 0 53.64502911-77.54092734 53.6450291-77.54092734 77.72530253-264.29211036 77.72530253-342.92939414 77.72530254-342.92939414C892.26532989 429.5403081 839.72295372 433.90324971 839.72295372 433.90324971L839.72295372 433.90324971 839.72295372 433.90324971zM839.72295372 433.90324971"
              fill="#ffffff"
              p-id="4603"
            ></path>
            <path
              d="M283.19557959 434.04085654L157.98966875 434.04085654c-25.85746846 0-26.25589863 25.39698047-26.25589863 25.39698047l25.85746845 418.53753193c0 26.63903847 26.68490771 26.63903847 26.68490772 26.63903848L292.64277412 904.61440742c22.57559385 0 22.3759292-17.62175215 22.3759292-17.62175215L315.01870332 465.7794374C315.01870332 433.63433164 283.19557959 434.04085654 283.19557959 434.04085654L283.19557959 434.04085654 283.19557959 434.04085654zM283.19557959 434.04085654"
              fill="#ffffff"
              p-id="4604"
            ></path>
          </svg>
          <span>{{ item.infos.likeCount }}</span>
        </div>
        <div class="viewCount" v-if="item.infos.collectionCount">
          <svg
            t="1609325987091"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5537"
            width="14"
            height="14"
          >
            <path
              d="M752.961492 942.423053c-9.69071 0-20.996197-3.229554-30.685883-8.074909l-209.966059-104.980983-211.57572 104.980983c-20.996197 11.304464-48.452525 9.689686-67.833944-4.846378-19.380396-14.544251-30.686906-40.386826-25.841552-64.602344l43.607171-226.110761L84.313779 483.733213c-17.765619-17.770735-24.225751-45.221948-17.765619-67.833945 8.075933-24.228821 27.456329-41.992393 53.29788-45.221947l230.956116-41.992393L454.167339 118.725008c11.310603-22.610974 33.921577-37.149085 58.143234-37.149084 24.226774 0 48.457642 14.538111 58.148352 37.149084l103.365182 209.95992 230.956116 40.379662c24.225751 3.230578 45.221948 20.999266 51.68208 45.225018 8.075933 24.225751 1.6158 50.067302-16.149819 67.833944L773.958712 638.788661l41.99137 226.110761c4.845355 25.840528-6.460132 50.068326-25.841552 64.602344-9.689686 8.076956-22.60995 12.921287-37.147038 12.921287z"
              p-id="5538"
              fill="#ffffff"
            ></path>
          </svg>
          <span>{{ item.infos.collectionCount }}</span>
        </div>
        <div class="shade"></div>
      </div>
      <h2>{{ item.name }}</h2>
      <div class="user">
        <div
          class="usericon"
          :style="{
            backgroundImage:
              'url(' +
              'https://pic.ecook.cn/web/' +
              item.user.imageid +
              '.jpg!wd320' +
              ')',
          }"
        ></div>
      </div>
      <h6>{{ item.user.nickname }}</h6>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["song"],
  data() {
    return {};
  },
  methods: {
    navigateToFoodlist: function (id,infos,item) {
      // console.log(infos)
      this.$router.push({
        path: "/foodListItemDetails",
        query: { id },
      });
      this.$store.commit("updateInfos",infos);
      this.$store.commit("updateMoreHistoryList",item);
    },
  },

};
</script>

<style lang='less'>
.FoodListItem {
  width: 100%;
  margin-top: 20px;
  background-color: white;
  .item {
    width: 100%;
    margin-bottom: 50px;
    .banner {
      width: 100%;
      overflow: hidden;
      height: 320px;
      position: relative;
      z-index: 2;
      .bj {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 4;
      }
      .likeCount,
      .viewCount {
        position: absolute;
        bottom: 10px;
        display: flex;
        align-items: center;
        z-index: 6;
        span {
          margin-left: 5px;
          color: white;
          font-size: 14px;
        }
      }
      .likeCount {
        right: 80px;
      }
      .viewCount {
        right: 10px;
      }
      .shade {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(
          top,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0.1) 60%,
          rgba(0, 0, 0, 0.3) 100%
        );
        z-index: 5;
      }
    }

    h2 {
      margin: 15px 0;
      font-size: 20px;
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
    p {
      line-height: 150%;
      padding: 0 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #707070;
    }
  }
}
</style>