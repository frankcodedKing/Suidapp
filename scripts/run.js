const hre = require("hardhat");

// Returns the Ether balance of a given address.
async function getBalance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx ++;
  }
}

// Logs the memos stored on-chain from coffee purchases.
async function printMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const buyer = memo.name;
    const buyeraddress = memo.from;
    const message = memo.message;
    console.log(`At ${timestamp}, ${buyer} (${buyeraddress}) said: "${message}"`);
  }
}

async function main() {
  // Get the example accounts we'll be working with.
  const [owner, buyer] = await hre.ethers.getSigners();

  // We get the contract to deploy.
  const BuySuiNft = await hre.ethers.getContractFactory("BuySuiNft");
  const buySuiNft = await BuySuiNft.deploy();

  // Deploy the contract.
  await buySuiNft.deployed();
  console.log("BuySuiNft deployed to:", buySuiNft.address);

  // Check balances before the purchase.
  const addresses = [owner.address, buyer.address, buySuiNft.address];
  console.log("== start ==");
  await printBalances(addresses);

  // Buy the owner a few coffees.
  const price = {value: hre.ethers.utils.parseEther("1")};
  await buySuiNft.connect(buyer).buyNft("FrankiTest", "I am the best Tester !", price);


  // Check balances after the coffee purchase.
  console.log("== bought nft ==");
  await printBalances(addresses);

  // Withdraw.
  await buySuiNft.connect(owner).withdrawFunds();
 
  // Check balances after withdrawal.
  console.log("== withdrawTips ==");
  await printBalances(addresses);

  // Check out the memos.
  console.log("== memos ==");
  const memos = await buySuiNft.getMemos();
  printMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });