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
    // if language is baseLanguage, then just return it
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

    // possibily add redirect routes, from base to lang
    // not sure if that makes sense
    // maybe better if some unique ID (e.g. base.path) stays in each route
    // to know where to redirect to
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
