'use strict';
const helpers = require('../generators/app/helpers');

test('it can do single-word pascal case correctly', () => {
  const moduleString = 'tests';
  const expectedModuleName = 'Tests';
  expect(helpers.toPascalCase(moduleString)).toMatch(expectedModuleName);
});

test('it can do multiple-word pascal case correctly', () => {
  const moduleString = 'A cool new module';
  const expectedModuleName = 'ACoolNewModule';
  expect(helpers.toPascalCase(moduleString)).toMatch(expectedModuleName);
});

test('it can count words properly', () => {
  const testSubjects = [['TestScreen', 1], ['Test Screen', 2], ['This is a long one', 5]];

  testSubjects.forEach(([subject, count]) =>
    expect(helpers.wordCount(subject)).toEqual(count)
  );
});
