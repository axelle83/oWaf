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
    mandatory: true,
  },
  {
    type: 'number',
    name: 'dog-birth',
    placeholder: 'Année de naissance',
    mandatory: false,
  },
];

const login = {
  title: 'Connexion',
  desc: 'Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte',
  link: 'Mot de passe oublié ?',
  fields: [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Adresse e-mail',
      mandatory: true,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Mot de passe',
      mandatory: true,
    },
  ],
  submit: {
    className: 'form-submit--login',
    label: 'Se connecter',
  },
};
const password = {
  title: 'Mot de passe oublié',
  desc: 'Renseignez votre adresse e-mail et nous vous envoyons un nouveau mot de passe tout beau tout neuf',
  link: 'Annuler',
  fields: [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Adresse e-mail',
    },
  ],
  submit: {
    label: 'Regénérer mot de passe',
  },
};

export default {
  me,
  dog,
  login,
  password,
};
