function run(text) {
  text = clearText(text);
  const result = getResponse(text, regexList);
  return result || 'Not Found';
}

function clearText(text) {
  return text.normalize('NFD').replace(/[^a-zA-Z\s]/g, '');
}

function getResponse(text, regexList) {
  return regexList.data.find(function (item) {
    return new RegExp(item.pattern, item.flags).test(text);
  });
}

const regexList = {
  data: [
    {
      pattern: /^oi$/,
      flags: 'gmi',
      response: 'Oi',
    },
    {
      pattern: /^ola$/,
      flags: 'gmi',
      response: 'Olá, tudo bem :)',
    },
    {
      pattern: /^(tudo bem|como vai)$/,
      flags: 'gmi',
      response: 'Tudo bem!',
    },
    {
      pattern:
        /^(chatbot|bot|robo)(\se\s|\s)(lindo|bonito|legal|incrivel|maravilhoso)$/,
      flags: 'gmi',
      response: 'Eu sou mesmo 😎',
    },
    {
      pattern:
        /^(chatbot|bot|robo)(\se\s|\s)(horrivel|chato|pessimo|ruim|feio)$/,
      flags: 'gmi',
      response: 'Eu não, eu sou legal 😎',
    },
    {
      pattern: /^((voce|vc)?(\se\s|\s)?(humano|chatbot|bot|robo))$/,
      flags: 'gmi',
      response: 'Eu sou um chatbot legal 😎',
    },
    {
      pattern: /^(voce|vc)(\se\s|\s)?de\sverdade$/,
      flags: 'gmi',
      response: 'Sou sim ou não, agora fiquei confuso 😵',
    },
    {
      pattern:
        /^((voce|vc)(\se\s|\s)legal|legal(\se\s|\s)(voce|vc)|gostei(\sde\s|\s)(voce|vc))$/,
      flags: 'gmi',
      response: 'Obrigado 😁',
    },
    {
      pattern: /^(tchau|adeus)$/,
      flags: 'gmi',
      response: 'Tchau 👋',
    },
    {
      pattern: /^nao falo com voce$/,
      flags: 'gmi',
      response: 'Estou aqui sempre que precisar',
    },
    {
      pattern: /^e ai|opa$/,
      flags: 'gmi',
      response: 'Opa, tudo bem?',
    },
    {
      pattern: /^((voce|vc)?(\se\s|\s)?feliz)$/,
      flags: 'gmi',
      response: 'Eu sou 😁',
    },
    {
      pattern: /^((voce|vc)?(\se\s|\s)?triste)$/,
      flags: 'gmi',
      response: 'Eu sou feliz 😁',
    },
    {
      pattern: /^bom dia$/,
      flags: 'gim',
      response: 'Bom dia!',
    },
    {
      pattern: /^boa tarde$/,
      flags: 'gim',
      response: 'Boa tarde!',
    },
    {
      pattern: /^boa noite$/,
      flags: 'gim',
      response: 'Boa noite!',
    },
    {
      pattern:
        /^((quem(\se\s|\s)(voce|vc))|(como se chama)|(seu|tem|teu)?\s?nome|nome\sseu)$/,
      flags: 'gim',
      response:
        'Olá, meu nome é EducaIFS, mas você pode me chamar de Edu, eu sou um bot 🤖',
    },
  ],
};
