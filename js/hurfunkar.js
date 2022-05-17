// hurfunkardet sidan

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  question.addEventListener("click", () => {
    question.classList.toggle("show-p");
  });
});
