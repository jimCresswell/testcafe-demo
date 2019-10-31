import demoPage from '../pages/demo.page';

/**
 * Test data.
 */
const expectedName = 'P Fry';

/**
 * Testing the main page.
 */
fixture('Actions on the main form')
  .page('http://devexpress.github.io/testcafe/example');


/******
 * The tests.
 ******/

test('Basic user data entry.', async t => {
  await t
    .typeText(demoPage.nameInput, expectedName)
    .click(demoPage.submit)
    .expect(demoPage.articleHeader.innerText).contains(expectedName, `Name should contain ${expectedName}`);
});

test('Checkbox state responsiveness.', async t => {
  for (const feature of demoPage.featureList) {
    await t
      .click(feature.label)
      .expect(feature.checkbox.checked).ok();
  }
});
