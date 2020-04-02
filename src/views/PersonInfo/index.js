import './index.less'
import avator from '@src/assets/avator.png'
import github from '@src/assets/github.png'

export default {
  render() {
    return (
      <div class="person-info">
        <img class="person-info__avator" src={avator} />
        <p>蔡雨</p>
        <p>前端开发</p>
        <p>932475428@qq.com</p>
        <p><a target="_blank" href="https://github.com/CandiceCaiYu/caiyublog"><img class="person-info__github" src={github} /></a></p>
      </div>
    )
  },
}
