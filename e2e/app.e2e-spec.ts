import { CtgsPage } from './app.po';

describe('ctgs App', function() {
  let page: CtgsPage;

  beforeEach(() => {
    page = new CtgsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
