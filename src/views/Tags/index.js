import './index.less'
import { map } from 'lodash'
import { allTags } from '@src/constant/tags'
import { defaultColors } from '@src/constant/common'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      tags: [
        { name: '全部', value: 'all' },
        ...allTags,
      ],
    }
  },
  methods: {
    ...mapActions('global', ['toggleTabType']),
    handleArticleFilter(item) {
      return () => {
        this.toggleTabType(item.value)
      }
    },
  },
  render() {
    return (
      <div class="tags">
        <ul class="tags-box">
         {map(this.tags, (item, index) => (
           <li
            class="tags-box__item"
            style={{ background: defaultColors[index] }}
            onclick={this.handleArticleFilter(item)}
          >{item.name}</li>
         ))}
        </ul>
      </div>
    )
  },
}
