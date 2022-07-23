function run(responseQnA) {
  try {
    responseQnA = JSON.parse(responseQnA);
    return responseQnA.answers[0].answer;
  } catch (error) {
    return responseQnA[0];
  }
}
