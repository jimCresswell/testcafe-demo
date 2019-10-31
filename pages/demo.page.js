import { Selector } from 'testcafe';

class Page {
  constructor () {
    this.nameInput = Selector('#developer-name');
    this.submit = Selector('#submit-button');
    this.articleHeader = Selector('.result-content').find('h1');
  }
}

export default new Page();
