#!/bin/bash
# Setting environment variables for organization 2
# Run source and this file name to set env Variables to Org1

echo "==================== Start.. ===================="
echo "Changing env variables to serve as org1..."
echo ".."

echo "Setting CORE_PEER_LOCALMSPID=Org2MSP"
export CORE_PEER_LOCALMSPID="Org2MSP"

echo "Setting FABRIC_CFG_PATH=$PWD/../config/"
export FABRIC_CFG_PATH=$PWD/../config/

echo "Setting CORE_PEER_TLS_ENABLED=true"
export CORE_PEER_TLS_ENABLED=true

echo "Setting CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt

echo "setting CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp"
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp

echo "Setting CORE_PEER_ADDRESS=localhost:9051"
export CORE_PEER_ADDRESS=localhost:9051

echo "==================== Done! ===================="
