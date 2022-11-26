require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stool deny soccer exchange hockey another army gasp'; 
let testAccounts = [
"0x444cb117a30e603ce6ffb065becb4d948bfdef1edcc6afe702668114cf6b61e1",
"0x735c665363e739f867c523ffaa0240c573491e9f01e7d2d94a8d74ecfb681412",
"0x630beb3795d8d33ad63cdfa72a94cb071a8439fd93fb971e19e9ad1f4fb1695c",
"0x3f6464cc2159ca3108e38ec0560f0f1f593593d4758a14d2a1d499a95a24be46",
"0x1966687c3aaa6544d5e5d47edaf6d6279f3a632069e4d1988374984e58e11ad3",
"0x0e840ba3aeae6b3d30c67c5fd5ebe915e552a918dcc06d2fc0ef52f0de5a1810",
"0x236fb91ff73d6bece84697caf600ae0672411d033fac510c092ac161aecc9f8b",
"0x5946131fd529bc0cb57beae131e80638aaa70535ab6a968d4e93c279b63cddc8",
"0x2adeac21adf3c7fac51954753bbdd59be2e183ec1f2cbe0c2d834ad7071eaba8",
"0xc9279cd2c4360680a0880d2906d25074e1cab397a844abb00a597a1079fd359d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

