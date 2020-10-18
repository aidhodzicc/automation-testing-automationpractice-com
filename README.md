# Automation testing automationpractice.com
Smoke Automated Tests for automationpractice.com

The project contains automation tests of Smoke Suite for automationpractice.com
Registration, Sign in/Sign Out, Search and Shop flows are covered by this automted Smoke Suite

Framework used for automating is Protractor

<h3>Prerequisites</h3>

<h4>JDK (Java Development Kit)</h4>
To run these tests, user needs to install JDK (Java Development Kit). JDK can be found on <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java Development Kit</a> site. Ensure that user has set <b>Environment Variable</b> (JAVA_HOME)
User can check its java version by running <code>java -version</code> from the command line.

<h4>Node.js</h4>
Protractor is Node.js program. To run tests user needs to have node binaries installed on its machine. Node.js can be found on <a href="https://nodejs.org/en/download/">Node.js</a> site. Node version can be checked by running <code>node --version</code> from the command line. Minimum version of Node.js should be greater than v0.10.0
Note: During the installation ensure to check the checkbox for installing Chocolatey. 
 
<h4>Protractor</h4>

Use npm to install Protractor globally with <code>npm install -g protractor</code>. When the installation is completed run <code>protractor --version</code> to make sure it is installed successfully. 
After the successful Protractor installation run the following command <code>webdriver-manager update</code> and after that, run the <code>webdriver-manager start</code> to start up a server. User can see information about the status of the server at <a href="http://localhost:4444/wd/hub">http://localhost:4444/wd/hub</a>.

Install protractor-jasmine2-html-reporter with following command <code>npm i protractor-jasmine2-html-reporter</code>

<h3> Running Smoke Suite tests</h3>
<ul>
    <li>Clone the repository</li>
    <li>Navigate to the root folder of the project</li>
    <li>Start up a server by running <code>webdriver-manager start</code> from command line</li>
    <li>Start the tests by running <code>protractor conf.js</code> from command line</li>
</ul>

User can find reports in Reports folder of the project which will be generated when the tests complete.
  

