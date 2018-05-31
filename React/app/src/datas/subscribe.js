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
    name: 'dogName',
    placeholder: 'Nom du chien',
    mandatory: true,
  },
  {
    type: 'number',
    name: 'dogBirth',
    placeholder: 'Année de naissance (4 chiffres)',
    mandatory: false,
  },
];

const login = {
  title: 'Connexion',
  desc: 'Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte',
  link: 'Mot de passe oublié ?',
  fields: [
    {
      type: 'text',
      name: 'pseudo',
      placeholder: 'pseudo',
      mandatory: true,
      fa: 'FaUser',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: '******',
      mandatory: true,
      fa: 'FaLock',
    },
  ],
  submit: {
    className: 'form-submit--login',
    label: 'Se connecter',
    function: 'onLoginSubmit',
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
      placeholder: 'Votre adresse e-mail',
      fa: 'FaUser',
    },
  ],
  submit: {
    label: 'Regénérer un mot de passe',
    function: 'onNewpassSubmit',
  },
};

export default {
  me,
  dog,
  login,
  password,
};
