import { PrincePage } from './app.po';

describe('prince App', function() {
  let page: PrincePage;

  beforeEach(() => {
    page = new PrincePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
