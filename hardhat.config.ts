import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import * as dotenv from 'dotenv';
import 'hardhat-gas-reporter';
import { HardhatUserConfig, task } from 'hardhat/config';
import 'solidity-coverage';

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/' + process.env.INFURA_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/' + process.env.INFURA_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
      gasPrice: 1000000000,
    },
    hardhat: {
      // gasPrice: 0,
      // hardfork: "berlin",
      // forking: {
      //   url: "https://mainnet.infura.io/v3/" + process.env.INFURA_TOKEN,
      // },
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS === 'true',
    excludeContracts: [],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_TOKEN,
  },
  mocha: {
    timeout: 100000,
  },
};

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

export default config;
