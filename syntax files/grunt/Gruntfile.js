module.exports = function(grunt){

	grunt.log.write(":::: Starting Grunt to load your tasks! :::::\n");
	/*
	**configure main project settings
	*/
	grunt.initConfig({
	//basic setting and info about our plugin
		pkg:grunt.file.readJSON("package.json"),
		//name of the plugin(name of pluig without "grunt-contrib-"). each plugins has its own properties defined in README.md

		/*
		**configure cssmin
		*/
		cssmin:{
			combine:{
				files:{
					"web/common/assets/css/index.css": ['web/common/assets/css/header.css', 'web/common/assets/css/footer.css', 'web/common/assets/css/common.css']
				}
			}
		},

		/*
		**configure uglify
		*/
		uglify:{
			dist:{
				files:{
					"web/main.min.js": ['web/main.js']
				}
			}
		},

		/*
		**configure less
		*/
		less:{
			compile:{
				files:{
					"web/common/assets/css/ad.css": ['web/common/assets/css/header.less']
				}
			}
		},

		/*
		**configure watch
		*/
		watch:{
			/*files:['web/common/assets/css/*.css', 'web/common/assets/css/*.less'],
			tasks:['cssmin', 'less']*/
			options:{
				livereload:true //refresh page if anything changed is if not even in watch
			},
			cssmin:{
				files:['web/common/assets/css/*.css'],
				tasks:'cssmin'
			},
			less:{
				files:['web/common/assets/css/*.less'],
				tasks:'less'
			}
		},

		/*
		**configure server
		*/
		express:{
			all:{
				options:{
					port:9000,
					hostname:"localhost",
					bases:['.'],
					livereload:true
				}
			}
		}
	});

	/*
	**Load the plugin
	*/
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

	/*
	**register & bootstrap below defined tasks
	*/
	grunt.registerTask('default', ['cssmin', 'uglify', 'less']);
	grunt.registerTask('server', ['express', 'watch']);
}