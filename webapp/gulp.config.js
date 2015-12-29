/**
 * Gulp Config
 * --------------------------------
 * This config stores all the gulp related infromation like pahts or
 * ignored modules
 *
 */

'use strict';

module.exports = {

  /**
   * TYPESCRIPT
   * Defines the compiler configurations
   */
  typescript: {
    noImplicitAny: false,
    removeComments: true,
    noEmitOnError: true,
    preserveConstEnums: true,
    sourceMap: false,
    declaration: false,
    noResolve: true,
    target: 'es5'
  },

  /**
   * PATHS
   * Defines the app-structure of this project
   */
  paths: {
    base: 'src',
    dist: 'dist',
    docsDir: 'docs',
    testDir: 'test',
    taskDir: 'tasks',
    libDir: 'lib',
    appDir: 'app',
    tempDir: '.tmp',
    main: 'index.html',
    mainTpl: 'index.tpl.html',
    assetsDir: 'assets',
    configDir: 'configs',
    cssDir: 'css',
    css: '**/*.css',
    js: '**/*.js',
    sassDir: 'scss',
    sass: '**/*.scss',
    sassMain: 'main.scss',
    fontDir: 'fonts',
    imagesDir: 'images',
    i18nDir: 'i18n',
    json: '**/*.json',
    app: {
      bootstrap: 'Bootstrap.ts',
      util: 'Util.ts',
      main: 'App.ts',
      modules: '**/*Module.ts',
      scripts: '**/*.ts',
      templates: '**/*.html',
      modulesDir: 'modules',
      viewDir: 'modules',
      layoutDir: 'layout',
      configDir: 'configs',
      modelDir: 'models',
      serviceDir: 'services',
      filterDir: 'filters',
      templateDir: 'templates',
      directiveDir: 'directives',
      componentDir: 'directives'
    }
  },

  /**
   * FILEHEADER
   * The fileheader will be used by the hirsch-generator and added to
   * new generated files
   */
  fileHeader: '/**\n' +
  ' * @name <%= name %>\n' +
  ' * @author <%= git.user.name %> (<%= git.user.email %>)\n' +
  ' * @date <%= date %>\n' +
  ' *\n' +
  ' * @description\n' +
  ' * <%= description %>\n' +
  ' */\n',

  /**
   * BANNER
   * The banner is the comment that is placed at the top of our compiled source files. It is first processed
   * as a Grunt template, where the pairs are evaluated based on this very configuration object.
   */
  banner: '/**\n' +
  ' * @name           <%= pkg.name %>\n' +
  ' * @description    <%= pkg.description %>\n\n' +
  ' * @version        <%= pkg.version %>\n' +
  ' * @author         <%= pkg.author %>\n' +
  ' * @license        <%= pkg.licenses %>\n' +
  ' */\n',

  /**
   * IGNORED STUFF
   */
  ignoredModules: [
    'core'
  ],

  ignoredBowerFiles: [],

  fonts: [

  ],

  bowerFiles: [
    './src/lib/moment/locale/de.js'
  ]

};

