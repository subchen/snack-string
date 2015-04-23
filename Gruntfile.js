module.exports = function(grunt) {

    var jsfiles = [
        'Gruntfile.js',
        'index.js',
        'lib/**/*.js',
        'test/**/*.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsbeautifier: {
            options: {
                config: '.jsbeautifyrc'
            },
            files: jsfiles
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: jsfiles
        },
        jscs: {
            options: {
                config: '.jscsrc',
            },
            files: jsfiles
        },
        mochaTest: {
            test: {
                src: ['test/**/*.js'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('verify', ['jsbeautifier', 'jshint', 'jscs']);
    grunt.registerTask('test', ['mochaTest']);

};
