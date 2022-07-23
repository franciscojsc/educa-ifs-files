function run(db, position, input) {
  db = typeof db == 'string' ? JSON.parse(db) : db;
  return validateAnswer(db, position, input);
}

function validateAnswer(db, position, input) {
  input = input - 1;
  return db[position].answers[input] == db[position].rightAnswer;
}
