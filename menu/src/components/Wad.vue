<template>
  <div class="box">
      wad
  </div>
</template>

<script>
export default {
    props: ['details'],
    watch:{
        details:function(n,o){
            console.log(n,o)
        }
    }
}
</script>

<style lang="less">
.box{
    width: 100%;
    height: 200px;
    background-color: red;
}
</style>