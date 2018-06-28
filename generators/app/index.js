'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { toPascalCase } = require('./helpers');
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the bee's knees ${chalk.red('generator-epochly')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What is the module name?',
        required: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.moduleName;
      this.props = props;
    });
  }

  writing() {
    const formattedName = toPascalCase(this.props.moduleName);

    // Files that need to be made but don't need a template
    ['Assets', 'Components'].forEach(emptyFolder =>
      this.fs.copy(
        this.templatePath(`${emptyFolder}/.gitkeep`),
        this.destinationPath(`${formattedName}/${emptyFolder}/.gitkeep`)
      )
    );
    // Base module file
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${formattedName}/index.js`),
      { componentName: formattedName }
    );
    // Module test
    this.fs.copyTpl(
      this.templatePath('index.test.js'),
      this.destinationPath(`${formattedName}/index.test.js`),
      { componentName: formattedName }
    );
    // Helpers file
    this.fs.copy(
      this.templatePath('helpers.js'),
      this.destinationPath(`${formattedName}/helpers.js`)
    );
    // Helpers test file
    this.fs.copy(
      this.templatePath('helpers.test.js'),
      this.destinationPath(`${formattedName}/helpers.test.js`)
    );
  }

  install() {}
};
