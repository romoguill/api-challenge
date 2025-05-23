const SYSTEMS = [
  'navigation',
  'communications',
  'life_support',
  'engines',
  'deflector_shield',
];

const RESPONSES: Record<(typeof SYSTEMS)[number], string> = {
  navigation: 'NAV-01',
  communications: 'COM-02',
  life_support: 'LIFE-03',
  engines: 'ENG-04',
  deflector_shield: 'SHLD-05',
};

export { SYSTEMS, RESPONSES };
