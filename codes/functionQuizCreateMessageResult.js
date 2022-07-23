function run(db, position, answer, tagBold) {
  db = typeof db == 'string' ? JSON.parse(db) : db;
  tagBold = JSON.parse(tagBold);

  if (answer == 'true') {
    return {
      thumb: {
        type: 'text/plain',
        content: '👍',
      },
      result: {
        type: 'text/plain',
        content: 'Acertou 😃',
      },
    };
  }

  return {
    thumb: {
      type: 'text/plain',
      content: '👎',
    },
    result: {
      type: 'text/plain',
      content: `Errou 😕, a resposta certa é ${tagBold.open}${db[position].rightAnswer}${tagBold.close}`,
    },
  };
}
