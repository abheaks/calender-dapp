const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Calender", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  it("Should set the minutely rate", async function () {
    const Contract = await ethers.getContractFactory("Calend3");
    const contract = await Contract.deploy();

    await contract.deployed();

    const tx = await contract.setRate(1008);
    // wait until the transaction is mined
    await tx.wait();
    // verify rate is set correctly
    expect(await contract.getRate()).to.equal(1008);

    // get addresses
    // const [owner, addr1, addr2] = await ethers.getSigners();
    // // call setRate using a different account address
    // // this should fail since this address is not the owner
    // await expect(contract.connect(addr1).setRate(500)).to.be.revertedWith(
    //   "Only the owner can set the rate"
    // );
  });
});
