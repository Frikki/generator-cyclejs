'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var slugify = require('underscore.string/slugify');
var camelize = require('underscore.string/camelize');
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var superb = require('superb');

var tpl;

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var done = this.async();

    var brandColor = chalk.cyan;

    this.log(yosay(
      'Scaffold your ' + brandColor.bold('Cycle.js') +
      ' ' + brandColor('Nested Dialogue') + ' module'
    ));

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function (moduleName) {
        return slugify(moduleName);
      }
    }, {
      name: 'githubUserName',
      message: 'What is your Github user name?',
      store: true,
      validate: function (userName) {
        return userName.length > 0 ? true : 'You must provide a user name!'
      }
    }, {
      name: 'websiteUrl',
      message: 'What is the URL of your website?',
      store: true,
      validate: function (websiteUrl) {
        return websiteUrl.length > 0 ? true : 'You must provide a website URL!'
      },
      filter: function (websiteUrl) {
        return normalizeUrl(websiteUrl);
      }
    }], function (props) {
      tpl = {
        moduleName: props.moduleName,
        moduleNameCamelized: camelize(props.moduleName, true),
        githubUserName: props.githubUserName,
        name: this.user.git.name(),
        emailAddress: this.user.git.email(),
        websiteUrl: props.websiteUrl,
        humanizedWebsiteUrl: humanizeUrl(props.websiteUrl),
        superb: superb()
      };

      done();
    }.bind(this));
  },

  writing: function () {
    var done = this.async();

    var mv = function (source, destination) {
      this.fs.move(
        this.destinationPath(source), this.destinationPath(destination)
      );
    }.bind(this);

    this.fs.copyTpl([
      this.templatePath() + '/**',
      '!**/module/*'
    ], this.destinationPath(), tpl);

    this.fs.copyTpl(
      this.templatePath('module') + '/**',
      this.destinationPath(tpl.moduleName), tpl);

    mv('editorconfig', '.editorconfig');
    mv('gitattributes', '.gitattributes');
    mv('gitignore', '.gitignore');
    mv('eslintrc', '.eslintrc');
    mv('eslintignore', '.eslintignore');
    mv('_package.json', 'package.json');
    mv('_postcss.config.json', 'postcss.config.json');
    mv('module.js', tpl.moduleName + '.js');
    mv('module.css', tpl.moduleName + '.css');

    this.spawnCommand('git', ['init']);

    done();
  },

  install: function () {
    this.npmInstall([
      'eslint@1.0.0'
    ], {saveDev: true, saveExact: true});

    this.npmInstall([
      'babel',
      'babelify',
      'browserify',
      'cssnext',
      'cli-release',
      'eslint-config-cycle',
      'eslint-plugin-cycle',
      'eslint-plugin-no-class',
      'validate-commit-message'
    ], {saveDev: true});

    this.npmInstall([
      '@cycle/core',
      '@cycle/dom'
    ], {save: true});

    this.installDependencies({bower: false});
  },

  end: function () {

    this.log(yosay(chalk.green('Scaffolding completed!') + 'Building the demo.'));

    this.spawnCommand('npm', ['start']);
  }
});
