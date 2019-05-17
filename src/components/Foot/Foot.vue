<template>
  <div>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/class'}" @click="goTo('/class')">
      <span class="icone">
         <i class="iconfont icon-shouye"></i>
      </span>


        <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/kind'}" @click="goTo('/kind')">
    <span class="item_icon">
      <i class="iconfont icon-dingdan"></i>
    </span>
        <span>发现</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/loging'}" @click="goTo('/loging')">
    <span class="item_icon">
      <i class="iconfont icon-wode"></i>
    </span>
        <span>我的</span>
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
    position fixed
    bottom 0
    background-color #fff
    width 100%
    display flex

    .guide_item
      display flex
      flex 1
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color blue
      span
        font-size 11px
        margin-top 2px
        .iconfont
          font-size 31px







</style>
