import { Selector, t as testController } from 'testcafe';

/**
 * Shared selectors
 */
const label = Selector('label');

/**
 * Page sub-section description.
 * @param {String} text Text to locate the feature selector with.
 */
class FeatureChoice {
  constructor (featureLabel) {
    this.label = label.withText(featureLabel);
    this.checkbox = this.label.find('input[type=checkbox]');
  }
}

/**
 * Primary page description.
 */
class Page {
  constructor () {
    // General page elements.
    this.nameInput = Selector('#developer-name');
    this.submitButton = Selector('#submit-button');
    this.articleHeader = Selector('.result-content').find('h1');

    // Feature selection elements.
    // TODO: This is very brittle because it relies on highly specific UI text, switch to CSS or text subset.
    this.featureList = [
      new FeatureChoice('Support for testing on remote devices'),
      new FeatureChoice('Re-using existing JavaScript code for testing'),
      new FeatureChoice('Easy embedding into a Continuous integration system')
    ]
  }


  /******
   * DOM property accessors.
   ******/

   get headerText() {
     return this.articleHeader.innerText;
   }


  /******
   * Page interaction methods.
   ******/

  async submitName (name) {
    await testController
      .typeText(this.nameInput, name)
      .click(this.submitButton);
  }

  async selectFeature (featureLabel) {
    await testController
      .click(featureLabel);
  }
}

export default new Page();
