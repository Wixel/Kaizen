module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        files: [
          {
            expand: true,
            cwd: 'bower_components/wixel-framework',
            src: ['**'],
            dest: './'
          },
          {
            expand: true,
            cwd: 'bower_components/bourbon/dist',
            src: ['**'],
            dest: 'scss/vendor/bourbon'
          }
        ]
      },
      additional: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/normalize-css/normalize.css'], dest: 'scss/vendor/',
          rename: function(dest, src) {
            return dest + src.replace('.css','.scss');
          }},
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'js/',}
        ]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['copy','jshint', 'qunit', 'concat', 'uglify']);

};