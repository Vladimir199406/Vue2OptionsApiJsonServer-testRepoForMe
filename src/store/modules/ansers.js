import axios from "axios";

export default {
  state: {
    formData: [],
  },
  getters: {},
  mutations: {
    updateAnswers(state, newFormData) {
      state.formData = newFormData;
    },
  },
  actions: {
    sendAnswersData({ commit }, formData) {
      axios
        .post("http://localhost:3001/answers", {
          answersList: formData,
        })
        .then((res) => {
          console.log(res.data);
          let responseData = res.data;
          commit("updateAnswers", responseData);
        })
        .catch(() => {
          console.error(new Error("Error"));
        });
    },
  },
};
