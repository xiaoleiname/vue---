<template>
  <div id="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
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
        <div class="swiper-slide">
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
  #wrap
    width 100%
    height 100%
    .swiper-container
      width 100%
      height 200px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .content-li
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


</style>

