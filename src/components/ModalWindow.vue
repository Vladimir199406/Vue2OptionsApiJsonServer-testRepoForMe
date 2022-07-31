<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-container__button" @click="$emit('close')">
            <img
              class="modal-container__button--img"
              src="@/assets/images/close.svg"
              alt="close"
            />
          </button>
          <section
            class="modal-header-default modal-container__body-wrapper"
            v-if="isLoading"
          >
            Please wait.
          </section>
          <section class="modal-container__body-wrapper" v-else>
            <div class="modal-body">
              <h3 class="modal-body__modal-header modal-header-default">
                Please answer a few questions
              </h3>
              <progress-bar
                :steps="questions.length"
                :questionCounter="questionCounter"
              />
              <ul class="modal-body__list">
                <!--Questions below-->
                <question
                  v-for="(question, index) in questions"
                  :key="question.id"
                  :name="question.name"
                  :totalQuestions="question.totalQuestions"
                  :index="index"
                  :questionCounter="questionCounter"
                  :answers="question.answers"
                />
              </ul>
            </div>
            <div class="modal-footer">
              <div class="footer">
                <button
                  v-if="questionCounter !== questions.length - 1"
                  class="footer__modal-default-button-next"
                  @click="nextQuestion"
                >
                  Next
                </button>
                <button
                  v-else
                  class="footer__modal-default-button-next"
                  @click.prevent="submitForm"
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import Question from "./Question.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "ModalWindow",
  components: {
    Question,
    ProgressBar,
  },
  data() {
    return {
      questions: [],
      questionCounter: 0,
      isLoading: true,
    };
  },
  props: ["showModal"],
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
    this.isLoading = false;
  },
  methods: {
    nextQuestion() {
      console.log("dsfsdfsd");
      this.questionCounter = this.questionCounter + 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/styles/variables";

// modal visual
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 9998;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      font-family: Helvetica, Arial, sans-serif;
      margin: 0px auto;
      max-width: 600px;
      min-height: 404px;
      position: relative;
      transition: all 0.3s ease;
      &__button {
        background: none;
        border: none;
        position: absolute;
        right: 0;
        &--img {
          height: 14px;
          padding: 10px;
        }
      }
      &__body-wrapper {
        padding: 20px 38px 20px 41px;
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
              position: absolute;
              text-align: center;
              width: 133px;
            }
          }
        }
      }
    }
  }
}

// transition styles
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
