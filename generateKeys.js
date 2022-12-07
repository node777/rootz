// var ethers = require("ethers");
let Web3=require("web3");
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
let fs=require("fs")

function createKey(){
    var privKey = web3.utils.randomHex(24);
    let intro="0xAAAAAAAAAAAAAAAA"
    privKey=privKey.split("x")
    privKey=intro.concat(privKey[1])

    var walletOfDestruction = web3.eth.accounts.privateKeyToAccount(privKey);
    let w={
        a: walletOfDestruction.address,
        k: walletOfDestruction.privateKey
    }
    return w
}




var counter = 0
var addressList=[];
var keyList={};

while(1){
    counter++

    let keyObj=createKey()

    let address = keyObj.a


    if(address[2]==7 && address[3]==7 && address[4]==7){
        
        let privKey = keyObj.k

        addressList.push(address);
        keyList[address]=privKey;

        // console.log("OUR ADDRESS IS ", address)
        // console.log("PRIVATE KEY IS ", privKey)
        // console.log("IT TOOK ", counter, " TRIES")
        // console.log(address.length)
        
        if(addressList.length%2==0){
            console.log("UNICORN")
            fs.writeFileSync("./addressList.js", JSON.stringify(addressList));
            fs.writeFileSync("./keyList.js", JSON.stringify(keyList));
        }
    }
    console.log(keyList)

}
