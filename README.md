# Gopher-Tunnel
## Workspace Setup Guide

**Mac OS/Linux Users**: I recommend installing the Homebrew Package Manager, which will be useful later
-	Enter this command into the terminal:

		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


### 1. Install nvm
-	Windows: Download and run the installer at https://github.com/coreybutler/nvm-windows/releases
-	Mac/Linux/WSL: Run one of the following commands in bash:

		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
		
		wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
		
		brew install nvm
You may need to install curl or wget if you receive an error.

### 2. Install Node.js and npm
- Windows: open cmd or Powershell as an Administrator and enter the following command:

      nvm install lts
- Mac/Linux/WSL, run the following command in bash:

      nvm install --lts
This will install the LTS version of Node.js and its corresponding npm version.
   
### 3. Install Git
- Windows: https://gitforwindows.org/
- Homebrew (Mac/Linux): ```brew install git```
- Ubuntu: ```sudo apt install git```
	
Enter the following commands in the terminal or Git Bash:
	
	git config --global user.email "your github email address"
	git config --global user.name "your github username"
	
### 4. VS Code Extensions (optional but recommended)
- React Native Tools: Debugging and commands
- Git Graph **(highly recommended)**: Graphical view of the branches of a GitHub repository
	
### 5. Clone the repository
In VS Code, go to the Source Control tab, follow the steps to sign in with GitHub. Once you are signed in, 
select "Clone Repository" and choose Gopher-Tunnel. It will ask where to put the repository, and it will 
create a Gopher-Tunnel folder in the directory you selected.
	
If VS Code asks you to automatically run git fetch, choose yes.
	
### 6. Install Expo Go 
For iPhone users, go to the App Store on your phone and install Expo Go. For Android users, install Expo from the Google Play Store.

##
Everything should now be set up! The following steps will be used frequently when working on the project:

### 7. Running the app
In the terminal, cd to the GopherTunnel folder and run the following command:
		
	npx expo start
	
This will initialize the app, and a QR code will appear in the terminal. Scan it in the Expo app to launch it on your phone. If you make any changes to the app, press 'r' in the terminal to refresh it.
	
### 8. Checking out to a new branch
If you plan on making any changes, do so within a new branch. 

On the Source Control tab in VS Code, go to
the three dots menu **-> Checkout to... -> Create new branch from... -> main** and then name the branch
	whatever you want, as long as people can tell that it is your branch.
