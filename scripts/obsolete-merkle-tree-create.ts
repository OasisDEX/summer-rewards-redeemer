import { keccak256, bufferToHex, keccakFromHexString } from "ethereumjs-util";
const { soliditySha3 } = require("web3-utils");
const { MerkleTree } = require("merkletreejs");

const inputDb = [
  "0x627306090abaB3A6e1400e9345bC60c78a8BEf57 258831",
  "0x627306090abaB3A6e1400e9345bC60c78a8BEf57 166699",
  "0xf17f52151EbEF6C7334FAD080c5704D77216b732 889988",
  "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef 707070",
  "0x821aEa9a577a9b44299B9c15c88cf3087F3b5544 566396",
  "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2 888888",
  "0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e 333666",
  "0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5 658658",
  "0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5 130779",
  "0x6330A553Fc93768F612722BB8c2eC78aC90B3bbc 123456",
  "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE 9998888",
  "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2 888888",
  "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE 9998888",
  "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2 888888",
  "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE 9998888",
  "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2 888888",
].map((x) => Buffer.from(x));
/* const tree = new MerkleTree(inputDb, keccak256);
console.log(tree.toString()); */

const createTree = (data: Array<Buffer>): Array<Array<Buffer>> => {
  const layers: Array<Array<Buffer>> = [[]];
  let i = 0;
  layers[i] = data.map((dataPoint) => {
    return keccak256(dataPoint);
  });

  while (layers[i].length > 1) {
    i++;
    layers[i] = createLayer(layers[i - 1]);
    console.log(layers[i]);
  }

  return layers;
};

const createLayer = (data: Array<Buffer>): Array<Buffer> => {
  const newLayer: Array<Buffer> = [];
  if (data.length % 2 === 0) {
    for (let i = 0; i < data.length; i = i + 2) {
      newLayer.push(keccak256(Buffer.concat([data[i], data[i + 1]])));
    }
  } else {
    for (let i = 0; i < data.length - 1; i = i + 2) {
      newLayer.push(keccak256(Buffer.concat([data[i], data[i + 1]])));
    }
    newLayer.push(data[data.length - 1]);
  }

  return newLayer;
};
console.log(createTree(inputDb));
