const localizedRoutes = {
  trips : {
    nl: 'reizen'
  },
  profile: {
    nl: 'profiel'
  }
};

class RoutesService {
  constructor(private localizedRoutes) {}

  public translate(baseRoutes, lang) {
    if (lang === 'en') {
      return baseRoutes;
    }

    const localized = baseRoutes.map(route => {
      // make sure to return fresh object
      const copy = Object.assign({}, route);
      if (copy.path === '') {
        return copy;
      }
      copy.path = this.localizedRoutes[route.path][lang];
      return copy;
    });

    const base = baseRoutes.reduce((acc, route) => {
      const copy = Object.assign({}, {path: route.path});
      if (copy.path === '') {
        return acc;
      }
      copy.redirectTo = localizedRoutes[route.path][lang];
      acc.push(copy);
      return acc;
    }, []);

    return base.concat(localized);

  }
}

export const routeService = new RoutesService(localizedRoutes);
