import API from '../api/city';

const reducer = (o, v) => ({ ...o, [v.id]: v });

export default {
  namespace: 'city',
  state: {
    list: []
  },
  getters: {
    list: state => state.list,
    map: state => state.list.reduce(reducer, {})
  },
  actions: {
    async getList({ commit }) {
      const { data } = await API.list();
      commit('city/getListDone', data);
    }
  },
  mutations: {
    getListDone(state, data) {
      state.list = data;
    }
  }
};
