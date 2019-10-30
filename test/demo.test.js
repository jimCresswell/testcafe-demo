import { Selector } from 'testcafe';

const expectedName = 'P Fry';

fixture('First test fixture')
  .page('http://devexpress.github.io/testcafe/example');

test('First test method', async t => {
  const articleHeader = Selector('.result-content').find('h1');
  const headerText = articleHeader.innerText;

  await t
    .typeText('#developer-name', expectedName)
    .click('#submit-button')
    .expect(headerText)
      .contains(expectedName, `Name should contain ${expectedName}`);
});
