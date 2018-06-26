'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-epochly:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ moduleName: 'brand new module' });
  });

  it('creates files', () => {
    assert.file(['BrandNewModule/index.js']);
    assert.fileContent(
      'BrandNewModule/index.js',
      'class BrandNewModule extends Component'
    );
    assert.fileContent('BrandNewModule/index.js', 'export default BrandNewModule;');
  });
});
