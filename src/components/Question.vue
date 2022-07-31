<template>
  <div class="question-wrapper" v-if="index === questionCounter">
    <p class="question-wrapper__title">
      {{ name }}
    </p>
    <ul v-if="answers" class="question-wrapper__answers-list">
      <li
        class="answer-field answer-bottom"
        v-for="(questionAnswer, questionIndex) of answers"
        :key="answers[questionIndex]"
      >
        <input
          class="answer-field__input"
          type="radio"
          :value="questionAnswer"
          :name="questionAnswer"
          v-model="userAnswer.variantAnswer"
        />
        <label :for="questionIndex" class="answer-field__label">{{
          questionAnswer
        }}</label>
      </li>
    </ul>
    <textarea
      v-if="text"
      class="question-wrapper__text"
      v-model="userAnswer.textAnswer"
    ></textarea>
    <div
      v-if="answers.length === 0"
      class="question-wrapper__do-not-want answer-bottom"
    >
      <input
        value="no-answer"
        type="checkbox"
        v-model="userAnswer.variantAnswer"
      />
      <label for="do-not-want">I do not want to answer</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      userAnswer: {
        variantAnswer: "" || [],
        textAnswer: "",
      },
    };
  },
  props: [
    "index",
    "questionCounter",
    "name",
    "totalQuestions",
    "answers",
    "text",
    "type",
  ],
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.question-wrapper {
  &__title {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 30px;
    line-height: 30px;
  }
  &__answers-list {
    .qanswer-field {
      align-items: center;
      display: flex;
      margin: $space12px 0;
    }
  }
  &__text {
    border: 2px solid $borderBackgroundDefault;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-top: $space12px;
    width: 259px;
    height: 74px;
    &:focus {
      background: $inputBackgroundDefault;
      border: 2px solid $borderBackgroundDefault;
      outline: none;
    }
  }
  &__do-not-want {
    align-items: center;
    display: flex;
  }
}
</style>
