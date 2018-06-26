'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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
    const formattedName = this._toPascalCase(this.props.moduleName);
    this.log(formattedName);
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
  }

  install() {
    this.installDependencies();
  }

  _toPascalCase(str) {
    return str
      .match(/[a-z]+/gi)
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      })
      .join('');
  }
};
