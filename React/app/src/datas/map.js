const places = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Nom du lieu',
    mandatory: true,
  },
  {
    type: 'text',
    name: 'adress',
    placeholder: 'Adresse du lieu',
    mandatory: true,
  },
  {
    type: 'number',
    name: 'lat',
    placeholder: 'Lat',
    mandatory: true,
  },
  {
    type: 'number',
    name: 'lng',
    placeholder: 'Lng',
    mandatory: true,
  },
  {
    type: 'textarea',
    name: 'comment',
    placeholder: 'Commentaire',
    mandatory: false,
  },
];
const check = [
  {
    name: 'leach',
    label: 'Laisse',
  },
  {
    name: 'fountain',
    label: 'Fontaine',
  },
  {
    name: 'lake',
    label: 'Lac à proximité',
  },
  {
    name: 'bag',
    label: 'Sac à déjections',
  },
];

export default {
  places,
  check,
};
