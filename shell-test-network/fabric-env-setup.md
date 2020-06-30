# Container setup for Server for hyperledger fabric on google cloud platform:

## System Requirement (Recommended):

- 5 cpus
- 15 GB RAM
- linux OS
- 50 GB

## Configuration of your machine

1. Get root access since many of below commands require root access

   ```
   sudo -s
   ```

1. Update the apt-get repo, better to run this command after each installation
   ```
   apt-get update
   ```
1. Install Docker
   ```
   apt-get install docker.io
   ```
1. Install Docker-compose
   ```
   apt-get install docker-compose
   ```
1. Install Curl
   ```
   apt-get install curl
   ```
1. Get go languge tar file using curl
   ```
   curl -O storage.googleapis.com/golang/go1.11.linux-amd64.tar.gz
   ```
1. Unzip tar file in current directory
   ```
   tar xvf go1.11.linux-amd64.tar.gz
   ```
1. Define go path in variable
   ```
   cmd --> export GOPATH=$HOME/go
   ```
1. Export variable to OS env variable
   ```
   export PATH=$PATH:\$GOPATH/bin
   ```
1. Install npm

   ```
   apt-get install npm
   ```

1. Geting node setup
   ```
   curl -sL deb.nodesource.com/setup_14.x | sudo -E bash -
   ```
1. Install nodejs
   ```
   sudo apt-get install -y nodejs
   ```
1. Getting Hyper Ledger L Fabric samples
   ```
   curl -sSL bit.ly/2ysbOFE | bash -s
   ```
