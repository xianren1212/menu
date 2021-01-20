<template>
  <div class="ClassIfySong">
    <div class="IfySon">
      <h3>
        {{ item.name }}
      </h3>
      <div class="ify">
        <div class="itemIfy"  v-for="(song, index) in item.list"
        :key="index"
        @click='navigateToFoodlist(song.id)'
        >
          <img :src="'https://pic.ecook.cn/web/'+ song.imageid + '.jpg!wd320'" alt="" />
          <span>{{song.name}}</span>
          <div class="shade"></div>
        </div>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    navigateToFoodlist:function(id){
      this.$router.push({
        path: "/foodList",
        query: {id},
      });
    }
  },
};
</script>

<style lang="less">
  .ClassIfySong{
    width: 100%;
    .IfySon{
      width: 100%;
      padding: 10px;
      h3{
          margin-top: 10px;
          font-size: 18px;
      }
      .ify{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding: 10px 0 10px 0;
        column-gap: 10px;
        .itemIfy{
          width: calc((100% - 10px*3) / 4);
          position: relative;
          overflow: hidden;
          margin-top: 10px;
          // margin-left: 5%;
          img{
            width: 100%;
            height: 100%;
          }
          span{
            position: absolute;
            display: block;
            width: 100%;
            text-align: center;
            color: white;
            z-index: 5;
            bottom: 5px;
            left: 0;
            font-size: 16px;
          }
          .shade{
            width: 100%;
            height: 30%;
            background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(0,0,0,0.3) 30%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.7) 100%);
            position: absolute;
            top: 70%;
          }
        }
      }
    }
    .hr{
      width: 100%;
      height: 15px;
      background-color: #f7f7f7;
      margin-top: 10px;
    }
  }
</style>