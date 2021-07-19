require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strong cost misery common inside light army gauge'; 
let testAccounts = [
"0x91a6a92db169ddfc70473b070b6f3ee9fa63c2a662a1a067ec165228b7d414ad",
"0x5b3ec649d14cd385e95ecf206f2d19a7595db28049367b4dced4624e05696d7e",
"0x1354a866647d905396980e5ac6dcf54765291293751cf9d3e0888cb1a9e684ea",
"0x743c0e44178adcfad876b65698d09053ee4624b9f7db5e79c57e81c024cba9db",
"0xd07a54086ea20751e0c3417365d22cc75fc19e49e82a25d621a27b2634033a65",
"0x1188d68e561b4d59b7e3567c2ce82f7def28d9612aba37682bbab727f9055e17",
"0x37a0a98fedbe9a5c8838c6ab31e02fd85ddaf565183ca64fc7b148885aff106a",
"0x485da3bb8958b1529c735703b43a5d9c5edc1e0bf7943ffcf303fd4fe1ea25ee",
"0x02898da39f10e45238386fadbeb2b2cb6992e3f2def512dc91770c9d3e9b9bbd",
"0x1eb328834343cc2cebe2ac710f37befccbc5b56f79187d6f55e5ae2e98e18ddf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


