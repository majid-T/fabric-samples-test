const { Gateway, Wallets } = require("fabric-network");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");

// Function to query all cars
async function _quaryAllCars() {
  try {
    // load the network configuration
    const ccpPath = path.resolve(
      __dirname,
      "..",
      "..",
      "test-network",
      "organizations",
      "peerOrganizations",
      "org1.example.com",
      "connection-org1.json"
    );
    const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), "wallet");
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    // Check to see if we've already enrolled the user.
    const identity = await wallet.get("appUser");
    if (!identity) {
      console.log(
        'An identity for the user "appUser" does not exist in the wallet'
      );
      console.log("Run the registerUser.js application before retrying");
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: "appUser",
      discovery: { enabled: true, asLocalhost: true },
    });
    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork("mychannel");
    // Get the contract from the network.
    const contract = network.getContract("fabcar");
    // Evaluate the specified transaction.
    // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
    // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
    const result = await contract.evaluateTransaction("queryAllCars");
    console.log(
      `Transaction has been evaluated, result is: ${result.toString()}`
    );
    // Disconnect from the gateway.
    await gateway.disconnect();
    return result;
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    process.exit(1);
  }
}

async function _queryCar(carNumber) {
  try {
    // load the network configuration
    const ccpPath = path.resolve(
      __dirname,
      "..",
      "..",
      "test-network",
      "organizations",
      "peerOrganizations",
      "org1.example.com",
      "connection-org1.json"
    );
    const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), "wallet");
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    // Check to see if we've already enrolled the user.
    const identity = await wallet.get("appUser");
    if (!identity) {
      console.log(
        'An identity for the user "appUser" does not exist in the wallet'
      );
      console.log("Run the registerUser.js application before retrying");
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: "appUser",
      discovery: { enabled: true, asLocalhost: true },
    });
    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork("mychannel");
    // Get the contract from the network.
    const contract = network.getContract("fabcar");
    // Evaluate the specified transaction.
    // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
    // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
    const result = await contract.evaluateTransaction("queryCar", carNumber);
    console.log(
      `Transaction has been evaluated, result is: ${result.toString()}`
    );
    // Disconnect from the gateway.
    await gateway.disconnect();
    return result;
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    process.exit(1);
  }
}

// Express inline routes
app.get("/query-cars", async function (req, res) {
  const qResult = await _quaryAllCars();
  res.json(qResult.toString());
});

app.get("/get-car", async function (req, res) {
  const carNo = req.query.carNo;
  const qResult = await _queryCar(carNo);
  res.json(qResult.toString());
});

//listening on port
const port = 3000;
app.listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(`Listening on port ${port}`);

// ===== Functions in chaincode =====
// async queryCar(ctx, carNumber) {
//     const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
//     if (!carAsBytes || carAsBytes.length === 0) {
//         throw new Error(`${carNumber} does not exist`);
//     }
//     console.log(carAsBytes.toString());
//     return carAsBytes.toString();
// }

// async createCar(ctx, carNumber, make, model, color, owner) {
//     console.info('============= START : Create Car ===========');
//     const car = {
//         color,
//         docType: 'car',
//         make,
//         model,
//         owner,
//     };
//     await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
//     console.info('============= END : Create Car ===========');
// }

// async queryAllCars(ctx) {
//     const startKey = '';
//     const endKey = '';
//     const allResults = [];
//     for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
//         const strValue = Buffer.from(value).toString('utf8');
//         let record;
//         try {
//             record = JSON.parse(strValue);
//         } catch (err) {
//             console.log(err);
//             record = strValue;
//         }
//         allResults.push({ Key: key, Record: record });
//     }
//     console.info(allResults);
//     return JSON.stringify(allResults);
// }

// example code
// Submit the specified transaction.
// createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
// changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR12', 'Dave')
// await contract.submitTransaction('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom');
// console.log('Transaction has been submitted');
