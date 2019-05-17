<template>
 <div id="wrap">
   <header class="header">
     <div class="header-left"><i class="iconfont icon-up"></i></div>
     <div class="header-cent">
       <span class="header-content"><i class="iconfont icon-soushuo"></i>输入商家名、品类或商圈</span>
     </div>
     <div  class="header-right"><i class="iconfont icon-wode"></i></div>
   </header>
   <!--轮播图-->
   <div class="swiper-container">
     <div class="swiper-wrapper">
       <div class="swiper-slide">
         <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@80eb900" alt="">
       </div>
       <div class="swiper-slide">
         <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@80eb900" alt="">
       </div>
     </div>
     <!-- 如果需要分页器 -->
     <div class="swiper-pagination"></div>
   </div>
   <div class="swiper-conta">
     <div class="swiper-wrapp">
       <div class="swiper-sl">
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
         <a class="content-li">
           <div class="content-top">
             <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" class="content-tow" alt="">
           </div>
           <span class="content-foot">美食</span>
         </a>
       </div>
     </div>
     <!-- 如果需要分页器 -->
     <div class="swiper-pagination"></div>

   </div>
   <div class="box">
     <a href="" class="box-1">
     <span>全部类目</span>
     <i class="iconfont icon-f11"></i>
   </a>
     <a href="" class="box-1">
       <span>附近商家</span>
       <i class="iconfont icon-f11"></i>
     </a>
     <a href="" class="box-1">
       <span>智能排序</span>
       <i class="iconfont icon-f11"></i>
     </a>
     <a href="" class="box-1">
       <span>筛选</span>
       <i class="iconfont icon-f11"></i>
     </a>
   </div>
  <div class="boa">
    <img src="//p0.meituan.net/deal/58966e6a7bbfb93272f2c1e03440638452414.jpg@353w_353h_1e_1c" alt="">
    <div class="boa-1">
      <span class="boa-2">大汉堡（大汉堡福永和平店）</span>
      <!--全局注册组件-->
      <Star/>

      <div class="boa-5">
        <span class="boa-6">汉堡</span>
        <span class="boa-6">福永汉堡第8名</span>
      </div>
    </div>

  </div>
   <div class="bos">
     <i class="iconfont icon-tuanhui2"></i>
     <span class="bos-1">16元单人餐一</span>
   </div>

 </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    mounted () {
      new Swiper('.swiper-container',{
        loop:true,
        pagination: {
          el:'.swiper-pagination'
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
#wrap
  width 100%
  height 1000px
  .header
    width 100%
    height 70px
    .header-left
      float left
      margin 18px 10px
      .iconfont
        font-size 20px
        color #999999
    .header-cent
      display inline-block
      margin 10px
      width 290px
      height 40px
      line-height 40px
      text-align center
      border-radius 23px
      background-color #ebeced
      .header-content
        color #999999
        font-size 15px
        .iconfont
          margin-right 5px
          font-size 20px
    .header-right
      float right
      width 50px
      height 60px
      margin-right 10px
      line-height 60px
      text-align center
      .iconfont
        font-size 30px
        color #999999
  .swiper-container
    bottom-border-1px(#ebeced)
    width 100%
    height 170px
    img
      display inline-block
      width 100%
      height 145px
  .swiper-conta
    bottom-border-2px(#ebeced)
    width 100%
    height 195px
    .swiper-wrapp
      width 100%
      height 100%
      .swiper-sl
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .content-li
          margin-top 10px
          width 25%
          .content-top
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            .content-tow
              display inline-block
              width 50px
              height 50px
          .content-foot
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774


  .box
    bottom-border-1px(#ebeced)
    width 100%
    height 50px
    line-height 50px
    display flex
    .box-1
      width 25%
      margin-left  5px
      text-align center
  .boa
    bottom-border-1px(#ebeced)
    width 100%
    height 130px
    img
      margin-top 10px
      margin-left 10px
      width 115px
      height 110px
    .boa-1
      width 260px
      height 100px
      float right
      margin-top 15px
      margin-right 15px
      margin-left 5px
      .boa-2
        font-size 20px
      .boa-5
        width 100%
        margin-top 15px
        margin-bottom 5px
        .boa-6
          font-size 15px


  .bos
    bottom-border-1px(#ebeced)
    display inline-block
    width 100%
    height 35px
    line-height 35px
    text-align center
</style>
