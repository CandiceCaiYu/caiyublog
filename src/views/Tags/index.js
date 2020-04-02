import './index.less'
import {map} from 'lodash'
import { allTags } from '@src/constant/tags'
import { defaultColors } from '@src/constant/common'
export default {
  render() {
    return (
      <div class="tags">
        <ul class="tags-box">
         {map(allTags, (item,index) => (
           <li class="tags-box__item" style={{background: defaultColors[index]}}>{item.name}</li>
         ))}
        </ul>
      </div>
    )
  }
}