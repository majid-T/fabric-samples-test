# Container setup for Server for hyperledger fabric on google cloud platform:

## System Requirement (Recomanded):

- 5 cpus
- 15 GB RAM
- linux OS
- 50 GB

## Configuration of your machine

1. Get root access since many of below commands require root access

```shell script
sudo -s
```

1. Update the apt-get repo

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

    4- install curl				: cmd --> apt-get install curl
    5- get go languge tar file using curl	: cmd --> curl -O storage.googleapis.com/golang/go1.11.linux-amd64.tar.gz
    6- unzip tar file			: cmd --> tar xvf go1.11.linux-amd64.tar.gz
    7- define go path in variable		: cmd --> export GOPATH=$HOME/go
    8- export variable to env variable 	: cmd --> export PATH=$PATH:$GOPATH/bin
    9- install npm				: cmd --> apt-get install npm
    10- geting node setup 			: cmd --> curl -sL deb.nodesource.com/setup_14.x | sudo -E bash -
    11- install nodejs			: cmd --> sudo apt-get install -y nodejs
    12- Getting HL Fabric samples		: cmd --> curl -sSL bit.ly/2ysbOFE | bash -s
