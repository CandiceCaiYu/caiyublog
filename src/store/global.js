const state = {
  tagType: 'all'
}

const actions = {
  toggleTabType({commit}, payload){
    commit('toggleTabType', payload)
  }
}

const mutations = {
  toggleTabType(state, data) {
    state.tagType = data
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}