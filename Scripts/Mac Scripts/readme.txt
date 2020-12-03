Hello there!

So in order for you to use the command scripts for Mac you need to do a simple command that gives the scripts permission to run.

First make sure that you have you are in the Mac scripts directory in your terminal.
For example my command to cd into the Mac scripts would be:
	cd Projects/MockUni/Scripts/Mac\ Scripts/

After that you want to run these commands

chmod u+x MockUni-Client-Build-Script.command

chmod u+x MockUni-Api-Build-Script.command

chmod u+x MockUni-Compose.command


Now you can just double click on the command files to run the scripts for building the docker containers.

To run both of the containers just use the MockUni-Compose.command script and that will start both of them up.

NOTE: The client side is not connected to the local instance of the API anymore. It is connected to the online API hosted on AWS

NOTE: When you start up the MockUni-Compose.command script, it will take some time before the react client is ready to go. It will show warnings about 404s and then say "starting the development server" use wait until that is gone.

To access the servers go to the web browser of your choice and go to:
	http://localhost:3000/
You will be taken to the react client frontend

If you need help please don't hesitate to contact me via email at: johncdsuico@gmail.com