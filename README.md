########
System prerequisites:
1. Running MySql server `v5.7` or higher
2. Importing sqlScipt/usermanagementdb.sql to MySql server
3. Change username/password for spring datasource from services\user\src\main\resources\application.yml to be valid username/password for MySql
4. maven
5. java 8
6. Verify that you are running at least node `v7.5.0` and npm `4.1.2`** Older versions produce errors.


########
to build user service run maven clean install in UserManagement/service/user folder

Executable jar shoud be in UserManagement\services\user\target\user-0.0.1-SNAPSHOT.jar

########
to build UI run npm install in UserManagement/ui folder

########
To run spring boot user service ----> java -jar user-0.0.1-SNAPSHOT.jar (Note: embeded tomcat is used for the project, no need for Tomcat server)

########
To run Angular 2 UI ----> npm start (from UserManagement/ui folder)
