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
            cwd: 'bower_components/bourbon/app/assets/stylesheets',
            src: ['**'],
            dest: 'scss/vendor/bourbon'
          }
        ]
      },
      additional: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/normalize-css/normalize.css'], dest: 'scss/vendor/',
          rename: function(dest, src) {
            return dest + src.replace('normalize.css','_normalize.scss');
          }},
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'js/',}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', ['copy']);

};
