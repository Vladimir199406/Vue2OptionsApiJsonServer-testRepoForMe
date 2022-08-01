import axios from "axios";

export default {
  state: {
    questions: [],
  },
  getters: {},
  mutations: {
    updateQuestions(state, newQuestions) {
      state.questions = newQuestions;
    },
  },
  actions: {
    getQuestions({ commit }) {
      axios
        .get("http://localhost:3001/questions")
        .then((response) => {
          console.log(response.data, this);
          commit("updateQuestions", response.data);
        })
        .catch(() => {
          console.error(new Error("Error"));
        });
    },
  },
};
