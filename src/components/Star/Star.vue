<template>
    <div class="star star-24">
      <span class="star-item on"></span>
      <span class="star-item on"></span>
      <span class="star-item on"></span>
      <span class="star-item half"></span>
      <span class="star-item off"></span>
      <div class="rating_section">
        4.3
      </div>
      <div class="order_section">
        月售106单
      </div>
    </div>
</template>
<script>
  export default {
    props: {//定义星星状态
      score: Number,
      size:Number
    },

    //计算星星属性
    computed: {
      starClassArr() {
        const {score} = this
        const arr = []
        const scoreInteger = Math.floor(score) //取整数

        //向arr添加n个on   on有星
        for(let i = 0;i<scoreInteger;i++){
          arr.push('on')
        }
        //向arr添加o/1个half 半星
        if(score*10 - scoreInteger*10 >=5 ) { //乘以10各自取整
          arr.push('half')
        }

        //向arr添加m个off 灰星
        while (arr.length<5) {
          arr.push('off')
        }
        return arr
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      height 30px
      line-height 40px
      margin-top 5px
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')

  .rating_section
    display inline-block
    font-size 10px
    color #ff6000
    margin-left 4px
  .order_section
    display inline-block
    font-size 10px
    color #666
    transform scale(.8)
</style>
