import { Ng2RoutesPage } from './app.po';

describe('ng2-routes App', function() {
  let page: Ng2RoutesPage;

  beforeEach(() => {
    page = new Ng2RoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
