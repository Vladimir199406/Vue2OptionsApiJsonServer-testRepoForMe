<template>
  <div v-if="index === questionCounter">
    {{ name }} ({{ index + 1 }}/{{ totalQuestions }})
    <div>
      <ul>
        <li
          v-for="(questionAnswer, questionIndex) of answers"
          :key="answers[questionIndex]"
        >
          {{ questionAnswer }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["index", "questionCounter", "name", "totalQuestions", "answers"],
};
</script>

<style></style>
