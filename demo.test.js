import demoPage from './pages/demo.page';

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
  await demoPage.submitName(expectedName);

  await t
    .expect(demoPage.headerText)
    .contains(expectedName, `Name should contain ${expectedName}`);
});

test('Features are selectable.', async t => {
  for (const feature of demoPage.featureList) {
    await demoPage.selectFeature(feature.label);

    await t
      .expect(feature.checkbox.checked)
      .ok();
  }
});
