import './index.less'
import moment from 'moment'
export default {
  data() {
    return {
      currentTime: '',
      timer: null,
      visitorCount: 290384293
    }
  },
  computed:{
    
  },
  methods: {
    handleCurrentTime() {
      const date =  moment().format('YYYY-MM-DD HH:mm:ss')
      const week = moment().format('d')
      const weeks = ['一','二','三','四','五','六','日',]
      this.currentTime = `${date} 星期${weeks[week-1]}`
    }
  },
  created() {
    this.timer = setInterval(this.handleCurrentTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  render() {
    return (
      <div class="header-content">
        <div class="header-content__left">
          <span>访客: <span>{this.visitorCount.toLocaleString()}</span></span>
        </div>
        <div class="header-content__right">
          <span class="header-content__right-time">{this.currentTime}</span>
        </div>
      </div>
    )
  }
}