export class HudsonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hudson-app h1')).getText();
  }
}
