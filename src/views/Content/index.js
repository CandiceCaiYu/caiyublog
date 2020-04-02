import './index.less'
import { map } from 'lodash'
import { allTags } from '@src/constant/tags'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      tagType: state => state.global.tagType
    }),
    tags() {
      if(this.tagType === 'all') {return allTags}
      const result =  allTags.filter(item => item.value.includes(this.tagType))
      return result
    }
  },
  render() {
    return (
      <div class="content">
        <ul class="content-news">
          {map(this.tags,item => (
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