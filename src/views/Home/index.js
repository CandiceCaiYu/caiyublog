import './index.less'
import PersonInfo from '@views/PersonInfo'
export default {
  render() {
    return (
      <div class="home">
        <div class="header"></div>
        <div class="main">
          <div class="main-left">
            <PersonInfo />
          </div>
          <div class="main-content"></div>
          <div class="main-right"></div>
        </div>
      </div>
    )
  }
}