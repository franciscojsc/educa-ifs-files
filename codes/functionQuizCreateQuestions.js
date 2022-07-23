function run(db, position, tagBold) {
  db = typeof db == 'string' ? JSON.parse(db) : db;
  tagBold = typeof tagBold == 'string' ? JSON.parse(tagBold) : tagBold;
  return createQuestion(db, position, tagBold);
}

function createQuestion(db, position, tagBold) {
  return {
    quizQuestion: {
      type: 'text/plain',
      content: db[position].question,
    },
    quizMenuQuestion: {
      type: 'application/vnd.lime.select+json',
      content: {
        scope: 'immediate',
        text: createMenu(db, position, tagBold),
        options: createOption(db, position),
      },
    },
  };
}

function createMenu(db, position, tagBold) {
  return db[position].answers
    .map((answer, index) => {
      return `${tagBold.open}${++index}${tagBold.close} - ${answer}`;
    })
    .join('\n');
}

function createOption(db, position) {
  return db[position].answers.map((answer, index) => {
    return {
      text: ++index,
    };
  });
}
