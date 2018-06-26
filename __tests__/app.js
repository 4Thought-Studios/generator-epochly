'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-epochly:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ moduleName: 'name-x' });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
    assert.fileContent('dummyfile.txt', 'name-x');
  });
});
