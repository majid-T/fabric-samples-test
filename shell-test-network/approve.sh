#!/bin/bash

echo ""
echo ""
echo "==================== Start... ==================== "
echo "Approveing in $CORE_PEER_LOCALMSPID peer..."
peer lifecycle chaincode approveformyorg -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name testchain --version 1.0 --package-id $CC_PACKAGE_ID --sequence 1 --tls --cafile ${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
echo ""
echo ""
echo "==================== Done! ==================== "
echo ""
echo ""
