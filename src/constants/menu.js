const menu = [
  {
    label: 'Início',
    action: '/',
  },
  {
    label: 'Portfólio',
    action: '/portfolio',
  },
  {
    label: 'Sobre',
    action: '/about',
    // hideInFooter: true,
  },
  {
    label: 'Anotações',
    action: '/tips',
    hideInNavbar: true,
  },
  {
    label: 'Mais',
    items: [
      {
        label: 'Anotações',
        action: '/tips',
      },
    ],
  },
];

export default menu;
