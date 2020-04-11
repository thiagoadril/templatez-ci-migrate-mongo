pipeline {
	agent any

	stages {
	
		/*
		 *	[MIGRATE DATABASE]
		 *	
		 */
		
        stage('MIGRATE DATABASE') {
			steps {
				script {
					echo '-----------------------------------'
					echo 'Migrate database...'
					docker.withTool("Default") {
						def image = docker.image('node:12.16.1')
						image.pull()
						image.inside() {
							switch(env.BRANCH_NAME) {
								case "master":
								sh 'cd app && npm install && npm run status:production && npm run up:production && npm run status:production'
								break
								case "staging":
								sh 'cd app && npm install && npm run status:staging && npm run up:staging && npm run status:staging'
								break
								case "testing":
								sh 'cd app && npm install && npm run status:testing && npm run up:testing && npm run status:testing'
								break
								case "develop":
								sh 'cd app && npm install && npm run status:development && npm run up:development && npm run status:development'
								break;
							}
						}
					}
					echo '-----------------------------------'
				}
            }
        }
    }
}