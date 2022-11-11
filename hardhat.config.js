require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      // url: `${process.env.MUMBAI_URL}`,
      url: "https://polygon-mumbai.g.alchemy.com/v2/h3OkVIjb2F4V6VcPf4LET6wXE3VnRe4L",
      //accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      accounts: [
        "93f02c3b691c61379f884f937b4a593aacfe66f809029f1457fb88f6ee803a01",
        // "1880ae859c3e4ec8a13f6583011530bd037d8c4865f92d5aefd1f925681d4b9c",
        // "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
      ],
    },
  },
};
