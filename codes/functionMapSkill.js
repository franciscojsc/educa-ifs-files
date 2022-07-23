const SKILL_DEFAULT = 'waterfall';

const mapSkills = [
  {
    pattern: /^(Menu)|(Sair)$/,
    flags: 'i',
    skill: 'main',
  },
  {
    pattern: /^Quiz$/,
    flags: 'i',
    skill: 'quiz',
  },
  {
    pattern: /^Tutoriais$/,
    flags: 'i',
    skill: 'tutorial01',
  },
  {
    pattern: /^Primeiro projeto com Git$/,
    flags: 'i',
    skill: 'tutorial02',
  },
  {
    pattern: /^Criar conta no GitHub$/,
    flags: 'i',
    skill: 'tutorial03',
  },
  {
    pattern: /^Publicar projeto$/,
    flags: 'i',
    skill: 'tutorial04',
  },
  {
    pattern: /^Publicar no GitHub$/,
    flags: 'i',
    skill: 'tutorial05',
  },
  {
    pattern: /^Finalizar$/,
    flags: 'i',
    skill: 'termination',
  },
  {
    pattern: /^(Finalizar Tutorial)|(Finalizar Quiz)$/,
    flags: 'i',
    skill: 'satisfaction',
  },
];

function run(input) {
  try {
    return mapSkills.find((ms) => new RegExp(ms.pattern, ms.flags).test(input))
      .skill;
  } catch (err) {
    return SKILL_DEFAULT;
  }
}
