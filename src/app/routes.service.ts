const localizedRoutes = {
  trips : {
    nl: 'reizen',
    en: 'trips',
    fr: 'voyages'
  },
  profile: {
    nl: 'profiel',
    en: 'profile',
    fr: 'profil'
  }
};

class RoutesService {
  constructor(private localizedRoutes) {}

  private skipReg = /^(\*\*)?$/;

  public translate(baseRoutes, lang) {

    const localized = baseRoutes.map(route => {
      // make sure to return fresh object
      const copy = Object.assign({}, route);
      if (this.skipReg.test(copy.path)) {
        return copy;
      }
      copy.path = this.localizedRoutes[route.path][lang];
      return copy;
    });

    // We could somehow add redirect routes, from base to lang
    // not sure if that makes sense
    // maybe better if some unique ID (e.g. base.path) stays in each route
    // to know where to redirect to
    const base = baseRoutes.reduce((acc, route) => {
      const copy = Object.assign({}, {path: route.path});
      if (this.skipReg.test(copy.path)) {
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
