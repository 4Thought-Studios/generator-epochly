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

  it('creates the index file properly', () => {
    assert.file(['BrandNewModule/index.js']);
    assert.fileContent(
      'BrandNewModule/index.js',
      'class BrandNewModule extends Component'
    );
    assert.fileContent('BrandNewModule/index.js', 'export default BrandNewModule;');
  });

  it('creates a basic test file correctly', () => {
    assert.file(['BrandNewModule/index.test.js']);
    assert.fileContent(
      'BrandNewModule/index.test.js',
      "import BrandNewModule from './index';"
    );
    assert.fileContent(
      'BrandNewModule/index.test.js',
      'const wrapper = shallow(<BrandNewModule/>)'
    );
  });

  it('creates the Compoents and Assets empty directories properly', () => {
    assert.file(['BrandNewModule/Assets/.gitkeep', 'BrandNewModule/Components/.gitkeep']);
  });
});

describe('generator-epochly:app different inputs', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ moduleName: 'tasks' });
  });

  it('Can handle one-word module names', () => {
    assert.file(['Tasks/index.js']);
    assert.fileContent('Tasks/index.js', 'class Tasks extends Component');
    assert.fileContent('Tasks/index.js', 'export default Tasks;');
  });
});
