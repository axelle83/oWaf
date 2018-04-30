const me = [
  {
    type: 'text',
    name: 'pseudo',
    placeholder: 'Mon pseudo',
    mandatory: true,
  },
  {
    type: 'text',
    name: 'city',
    placeholder: 'Ma ville',
    mandatory: true,
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Mon adresse mail',
    mandatory: true,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Mon mot de passe',
    mandatory: true,
  },
  {
    type: 'password',
    name: 'confirmpassword',
    placeholder: 'Confirmer le mot de passe',
    mandatory: true,
  },
];

const dog = [
  {
    type: 'text',
    name: 'dog-name',
    placeholder: 'Nom du chien',
  },
  {
    type: 'number',
    name: 'dog-birth',
    placeholder: 'Année de naissance',
  },
  {
    type: 'text',
    name: 'dog-race',
    placeholder: 'Race',
  },
];

export default {
  me,
  dog,
};
