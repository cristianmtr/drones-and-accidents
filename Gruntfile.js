module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        ts: {
            lib: {
                src: ['ts/*.ts'],
                out: 'js/index.js',
                options: {
                    target: 'es3',
                    sourceMaps: false,
                    declaration: true,
                    removeComments: false
                }
            },
        },
        watch: {
            files: 'ts/*.ts',
            tasks: ['ts:lib']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['ts', 'connect', 'open', 'watch']);

};