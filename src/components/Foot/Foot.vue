<template>
  <div>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/class'}" @click="goTo('/class')">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/kind'}" @click="goTo('/kind')">
    <span class="item_icon">
      <i class="iconfont icon-shu"></i>
    </span>
        <span>实物</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/loging'}" @click="goTo('/loging')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
        <span>购物车</span>
      </a>

    </footer>
  </div>
</template>
<script>
  export default {
    methods: {
      goTo (path) {
        //编程方式路由跳转
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    width 100%
    height 70px
    position fixed
    bottom 0
    line-height 70px
    display flex
    .guide_item
      flex 1
      text-align center
      flex-direction column
    color #999999
      &.on
        color red
      span
        font-size 20px

        .iconfont
          font-size 22px
</style>
