import './index.less'
import { map } from 'lodash'
import { allTags } from '@src/constant/tags'
export default {
  render() {
    return (
      <div class="content">
        <ul class="content-news">
          {map(allTags,item => (
            <li class="content-news__item">
              <h6>{item.name}</h6>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}