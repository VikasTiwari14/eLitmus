# eLitmus-Assessment

First you have to clone this repository from github to your local system.
For better understanding of setup procedure you can refer this video.


After Cloning process is done you will end with the following folder hierarchy :
eLitmus
  |->Backend (Backend server for api request and data storage)
  |->admin-panel (frontend for admin to view user data along with their image proctoring)
  |->test-page   (It is assessment website where extension will work, you can consider this as example website)
  |->extension   (This contains the code for chrome extension)
  
Now, go through each folder and open that folder in terminal and the this command "npm install", this command will install all the required dependencies of the project.
for example : Backend->open in terminal->run "npm install"

After installing dependencies in each folder.
Go to extension->open in terminal->run "npm run build", this command will create a production build with the help of which we can make it into chrome extension.

To add this extension code into browser, go to browser extension setting, on the top right there is a toggle to enable developer mode, enable this setting.
After enabling developer mode, On the top left corner 3 option will appear from which select the "Load Unpacked".
When you click "Load Unpacked" a popup window will apear in which you have to navigate to the "eLitmus->extension->build" this location and click open.
A new extension will be added in your browser.

In the mean while you can start the other apps on localhost.
Backend->open in terminal->run "nodemon src/App".
test-page -> open in terminal -> run "npm start"
admin-panel -> open in terminal -> run "npm start"


With all these setup procedure is done.

# Working of project

Click the extension icon, this will open a chrome extension popup with a form asking for the following data : 
1. Name
2. Email
3. Test Invitation Code

After filling above details click on start test, then the extension will perform a system requirement check for Microphone and Webcam. If both works well then a button and a unique test code will appear you have to copy the unique test code and close the chrome extension popup.

After copying unique test code, Open the localhost where "test-page" is running, it will ask for unique test code, enter the unique test code which you have copied from chrome extension. After entering valid unique test code test will start along with timer and webcam proctoring the whole test and also sending user image in every configurable intervals and those image will be stored in backend.

After completion of timer it will be redirected to starting page.

->Admin Panel
when you visit the localhost running admin-panel. First you have to login to access the admin data. the login credentials for admin panel is as follows:
email -> admin@test.com
password -> Admin123

After login you can view list of user in table format.
the you click on a certain student, it will be redirected to user detail page where all images will be rendered that are taken on configurable intervals
along with their timestamp.



This is the whole working of the assessment given.
Thank you.
