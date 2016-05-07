import { HudsonPage } from './app.po';

describe('hudson App', function() {
  let page: HudsonPage;

  beforeEach(() => {
    page = new HudsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hudson works!');
  });
});
