import './index.less'
import avator from '@src/assets/avator.png'

export default {
  render() {
    return (
      <div class="person-info">
        <img class="person-info__avator" src={avator} />
        <p>蔡雨</p>
        <p>前端开发</p>
        <p>932475428@qq.com</p>
      </div>
    )
  },
}
