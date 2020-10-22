var ethers = require('ethers');  
var url = 'https://lively-bold-grass.quiknode.pro/e1734b70dcb506921e4754d04911ed9ba400e854/';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});