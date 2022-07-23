function run() {
  return db;
}

const db = [
  {
    question:
      'Quais são três principais estados que os arquivos podem estar no Git?',
    answers: [
      'git add, git commit, git log',
      'untrack, track, stage',
      'local, centralizado, descentralizado',
      'modified, staged, committed',
    ],
    rightAnswer: 'modified, staged, committed',
  },
  {
    question: 'Quais as três seções principais de um projeto Git?',
    answers: [
      'local, centralizado, descentralizado',
      'diretório de trabalho, área de preparo, repositório',
      'modified, staged, committed',
      'git add, git commit, git log',
    ],
    rightAnswer: 'diretório de trabalho, área de preparo, repositório',
  },
  {
    question: 'O que significa um arquivo está não rasteado (untrack)?',
    answers: [
      'Arquivos novos, que o Git não conhece',
      'Arquivos que foram salvos no repositório local',
      'São os arquivos que o Git conhece',
      'Os arquivos que estão na área de preparo',
    ],
    rightAnswer: 'Arquivos novos, que o Git não conhece',
  },
  {
    question: 'O que é a área de preparo (index)?',
    answers: [
      'Local onde fica os metadados do projeto',
      'È a área dos arquivos excluídos',
      'É uma simples cópia de uma versão do projeto',
      'Local que prepara os arquivos para versionar',
    ],
    rightAnswer: 'Local que prepara os arquivos para versionar',
  },
  {
    question: 'O que é o diretório de trabalho?',
    answers: [
      'É uma simples cópia de uma versão do projeto',
      'Local que prepara os arquivos para versionar',
      'Local onde fica os metadados do projeto',
      'É uma área onde ficam os arquivos excluídos',
    ],
    rightAnswer: 'É uma simples cópia de uma versão do projeto',
  },
  {
    question: 'O que é o repositório local?',
    answers: [
      'É uma área preparar os arquivos',
      'É uma simples cópia de uma versão do projeto',
      'Área de descarte dos últimos arquivos',
      'Local de armazenar informações do projeto Git',
    ],
    rightAnswer: 'Local de armazenar informações do projeto Git',
  },
  {
    question: 'O que significa um commit?',
    answers: [
      'Fazer snapshot dos arquivos da área de preparo',
      'Desfazer alterações em arquivos',
      'Remover arquivos do repositório',
      'Visualizar o histórico das versões dos arquivos',
    ],
    rightAnswer: 'Fazer snapshot dos arquivos da área de preparo',
  },
  {
    question: 'O que é um sistema de controle de versão?',
    answers: [
      'Um sistema que substitui os arquivos',
      'Sistema para mover aquivos entre pastas',
      'É um sistema que registra alterações no arquivo',
      'Navegador de arquivos',
    ],
    rightAnswer: 'É um sistema que registra alterações no arquivo',
  },
  {
    question: 'Quais os tipos de sistemas de versão?',
    answers: [
      'Local, Centralizado, Distribuído',
      'Físico, Virtual, Local',
      'Centralizado, Virtual, Entrelaçado',
      'Distribuído, Virtual, Local',
    ],
    rightAnswer: 'Local, Centralizado, Distribuído',
  },
  {
    question: 'Sistema de controle de versão do Git?',
    answers: ['Centralizado', 'Virtual', 'Distribuído', 'Entrelaçado'],
    rightAnswer: 'Distribuído',
  },
  {
    question: 'Quem criou o Git?',
    answers: ['Linus Torvalds', 'Bill Gates', 'Elon Musk', 'Satya Nadella'],
    rightAnswer: 'Linus Torvalds',
  },
  {
    question: 'Qual foi o ano que o Git foi criado?',
    answers: ['2000', '2003', '2005', '2008'],
    rightAnswer: '2005',
  },
  {
    question: 'O que é o HEAD no Git?',
    answers: [
      'É sempre o primeiro commit realizado',
      'Local onde ficam os metadados do commit',
      'Uma cópia de um commit',
      'Um ponteiro que indica o commit atual',
    ],
    rightAnswer: 'Um ponteiro que indica o commit atual',
  },
  {
    question: 'O que é um branch?',
    answers: [
      'Uma ramificação independente',
      'Sistema para mover aquivos entre pastas',
      'É uma área onde ficam os arquivos excluídos',
      'Os arquivos que estão na área de preparo',
    ],
    rightAnswer: 'Uma ramificação independente',
  },
  {
    question: 'Protocolo de transferência que o Git não aceita?',
    answers: ['HTTP/HTTPS', 'SSH', 'Git', 'Telnet'],
    rightAnswer: 'Telnet',
  },
];
