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
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'),
      { moduleName: this.props.moduleName }
    );
  }

  install() {
    this.installDependencies();
  }
};
