import demoPage from '../pages/demo.page';

const expectedName = 'P Fry';

fixture('Actions on the main form')
  .page('http://devexpress.github.io/testcafe/example');

test('Basic user data entry', async t => {
  await t
    .typeText(demoPage.nameInput, expectedName)
    .click(demoPage.submit)
    .expect(demoPage.articleHeader.innerText).contains(expectedName, `Name should contain ${expectedName}`);
});
