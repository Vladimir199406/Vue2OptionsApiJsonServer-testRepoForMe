<template>
  <div>
    <loading-skeleton v-if="isLoading" />

    <section v-else class="body-wrapper">
      <div class="modal-body">
        <h3 class="modal-body__modal-header modal-header-default">
          Please answer a few questions
        </h3>
        <progress-bar
          :steps="questions.length - 1"
          :progressCounter="progressCounter"
        />
        <ul class="modal-body__list">
          <div>
            <div class="question-wrapper" v-if="currentQuestion">
              <p class="question-wrapper__title">
                {{ currentQuestion.name }}
              </p>
              <ul
                v-if="currentQuestion.answers"
                class="question-wrapper__answers-list"
              >
                <li
                  class="answer-field answer-bottom"
                  v-for="(
                    questionAnswer, questionIndex
                  ) of currentQuestion.answers"
                  :key="currentQuestion.answers[questionIndex]"
                >
                  <input
                    class="answer-field__input"
                    :id="questionIndex"
                    :type="currentQuestion.type"
                    :value="questionAnswer"
                    v-model="checkListAnswers"
                  />
                  <label :for="questionIndex" class="answer-field__label">{{
                    questionAnswer
                  }}</label>
                </li>
              </ul>

              <textarea
                v-if="currentQuestion.textarea"
                class="question-wrapper__text"
                v-model="textAnswer"
              ></textarea>

              <div
                v-if="currentQuestion.answers.length === 0"
                class="question-wrapper__do-not-want answer-bottom"
              >
                <input
                  id="allow"
                  type="checkbox"
                  value="I do not want to answer"
                  v-model="checkListAnswers"
                />
                <label for="allow">I do not want to answer</label>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div class="modal-footer">
        <div class="footer">
          <button
            class="footer__modal-default-button-next"
            @click="nextFormStep"
            :disabled="isButtonDisabled"
          >
            {{ textSubmitButton }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton.vue";
import ProgressBar from "@/components/interfaceElements/ProgressBar.vue";

export default {
  name: "ModalWindow",
  components: {
    ProgressBar,
    LoadingSkeleton,
  },
  data() {
    return {
      questions: [],
      questionCounter: 0,
      progressCounter: 0,
      isLoading: true,
      checkListAnswers: [],
      textAnswer: "",
      formData: [],
    };
  },
  computed: {
    textSubmitButton() {
      return this.questionCounter === this.questions.length - 1
        ? "Submit"
        : "Next";
    },
    isButtonDisabled() {
      let disableFlag = true;
      if (this.checkListAnswers.length || this.textAnswer.length) {
        disableFlag = false;
      } else {
        disableFlag = true;
      }
      return disableFlag;
    },
    currentQuestion() {
      return this.questions?.length && this.questions[this.questionCounter];
    },
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3001/questions");
      this.questions = res.data;
      console.log("questions", this.questions);
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    setTimeout(() => (this.isLoading = false), 1000);
  },
  methods: {
    saveCurrentStepData() {
      let item = {
        title: this.currentQuestion.name,
        checkedValues: [],
        textValue: "",
      };
      item.textValue = this.textAnswer;
      item.checkedValues = this.checkListAnswers;
      this.formData.push(item);
    },
    nextFormStep() {
      this.saveCurrentStepData();
      if (this.questionCounter === 1) {
        if (this.checkListAnswers === this.currentQuestion.answers[0]) {
          this.questionCounter += 2;
        } else {
          this.questionCounter += 1;
        }
      } else if (this.questionCounter === 2) {
        this.questionCounter = 4;
      } else if (this.questionCounter === this.questions.length - 1) {
        this.submitForm();
      } else {
        this.questionCounter += 1;
      }
      this.progressCounter += 1;
      this.checkListAnswers = [];
      this.textAnswer = "";
    },
    async submitForm() {
      try {
        const res = await axios.post("http://localhost:3001/answers", {
          name: this.formData,
        });

        this.formData = [...this.formData, res.data];
        this.checkListAnswers = [];
        this.textAnswer = "";
        this.formData = [];
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        this.$emit("closeModal");
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables";

.body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 38px 40px 41px;
  .modal-body {
    margin: 20px 0;
  }
  .modal-footer {
    .footer {
      &__modal-default-button-next {
        background-color: $buttonBackgroundDefault;
        border-radius: 5px;
        border: none;
        bottom: 40px;
        color: #fff;
        font-size: 14px;
        height: 40px;
        left: 41px;
        line-height: 18px;
        text-align: center;
        width: 133px;
      }
    }
  }
}
</style>
