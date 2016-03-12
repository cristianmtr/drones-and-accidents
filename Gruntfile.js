module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        php: {
            dist: {
                options: {
                    port: 5000
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
            }
        },
        watch: {
            files: 'ts/*.ts',
            tasks: ['ts:lib']
        },
        open: {
            dev: {
                path: 'http://localhost:5000/index.php'
            }
        }
    });

    grunt.registerTask('default', ['ts', 'php', 'open', 'watch']);

};