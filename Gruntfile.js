/* >> Init Config: >>>>>>>>>>>>
=====================================================================================*/ // based on generator-angular 0.9.8
'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  var modRewrite = require('connect-modrewrite');

  grunt.initConfig({
    yeoman: appConfig,

/* >> Plugins: >>>>>>>>>>>>
=====================================================================================*/

// Frameworks //////////////////////////////////////////////
// --
    sass: {
      server: {
        options: {
          sourceMap: true,
          outputStyle: 'nested'
        },
        files: {
          '.tmp/styles/app.css': '<%= yeoman.app %>/styles/_scss/app.scss'
        },
      },
      build: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: {
          '.tmp/styles/app.css': '<%= yeoman.app %>/styles/_scss/app.scss'
        },
      }
    },

// Minifiers //////////////////////////////////////////////
// --
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html', 'partials/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
// --
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
// --
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/media/images']
      }
    },
// --
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/media/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/media/images'
        }]
      }
    },

// Lint / Hint ///////////////////////////////////////////////
// --
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      strict: {
        options: {
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'tag-pair': true,
          'spec-char-escape': true,
          'id-unique': true,
          'src-not-empty': true,
          'attr-no-duplication': true
        },
        src: ['path/to/**/*.html']
      },
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['.tmp/styles/{,*/}*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['.tmp/styles/{,*/}*.css']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '!<%= yeoman.app %>/scripts/libs/{,*/}*.{js,json}'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

// Misc //////////////////////////////////////////////
// --

// css / styles
// --
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

// javascript
// --
    modernizr: {
      dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '.tmp/concat/scripts/modernizr.js',
        uglify: false,
        parseFiles: true,
        files: {
          src: ['build/**/*']
        },
      }
    },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

// environment
//--
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
// --
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt,md,yaml,xml}',
            '.htaccess',
            '{,*/}*.html',
            'media/{,*/}*.{webp,svg,gif,ico,mp4,ogv,ogg,webm,mp3}',
            'styles/fonts/{,*/}*.*',
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/media/images',
          src: ['generated/*']
        }]
      }
    },
// --
    concurrent: {
      server: [
        'sass:server'
      ],
      build: [
        'sass:build',
        'imagemin'
      ]
    },
// --
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },
// --
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
// --
    'shell': {
      dist: {
        command: function () {
          return 'echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ༼ つ ◕◡◕ ༽つ Grunt Build Done! ███ Ctrl+C to Exit ███';
        }
      }
    },
// testing
// --
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

/* >> Render Config: >>>>>>>>>>>>
=====================================================================================*/

// Revision //////////////////////////////////////////////
// --
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/media/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        ]
      }
    },

// Watch //////////////////////////////////////////////
// --
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.{js,json}', '!<%= yeoman.app %>/scripts/libs/{,*/}*.{js,json}'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      sass: {
        files: ['<%= yeoman.app %>/styles/_scss/*.{scss,sass}', '<%= yeoman.app %>/styles/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server','autoprefixer'],
        sourceComments: 'normal',
        options: {
          nospawn: true,
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/media/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

// Local Server //////////////////////////////////////////////
// --
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ],
          middleware: function (connect, options) {
            var middlewares = [];

            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
            options.base.forEach(function (base) {
              middlewares.push(connect.static(base));
            });

            middlewares.push(
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              )
            );

            return middlewares;
          }
        }
      },
      test: {
        options: {
          port: 9002,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          port: 9001,
          livereload: false,
          keepalive: true, // this is kind of stupid, but its seemingly the only way to kick off a local preview after build
          base: '<%= yeoman.dist %>',
          // below is needed for build as well - due to angular routing on local server
          middleware: function (connect, options) {
            var middlewares = [];

            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
            options.base.forEach(function (base) {
              middlewares.push(connect.static(base));
            });

            middlewares.push(
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              )
            );

            return middlewares;
          }
        }
      }
    },
  });

/* >> Task Execution: >>>>>>>>>>>>
=====================================================================================*/

// Dev //////////////////////////////////////////////
// --
  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

// Test //////////////////////////////////////////////
// --
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

// Build //////////////////////////////////////////////
// --
  grunt.registerTask('build', [
    'newer:htmlhint:strict',
    // 'newer:csslint:lax',
    'jshint:all',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:build',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'newer:cdnify',
    'cssmin:generated',
    'uglify',
    'modernizr',
    'filerev',
    'usemin',
    'htmlmin',
    'shell:dist',
    'connect:dist'
  ]);

// Default //////////////////////////////////////////////
// --
  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
