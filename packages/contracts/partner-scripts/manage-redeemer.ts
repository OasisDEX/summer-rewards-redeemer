import rewardsRedeemerFactoryAbi from '../abi/contracts/RewardsRedeemerFactory.sol/RewardsRedeemerFactory.json'
import { ethers } from 'ethers'
import stdio from 'stdio';
import "../bootstrap-env";

const config = {
  'rewardsRedeemerFactory': '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
}

async function main() {

  const ops = stdio.getopt({
    'action': { key: 'action', args: 1, description: `Action: 'get' or 'create' redeemer address for a partner EOA` },
    'address': { key: 'address', args: 1, description: `Partner address` },
    'token': { key: 'token', args: 1, description: `Redeemer token address` },
  });

  if (!ops) return false

  const action = ops.action as string
  const address = ops.address as string
  const token = ops.token as string

  if (!ethers.utils.isAddress((address))) {
    return console.log('Invalid partner address')
    return false
  }

  if (!ethers.utils.isAddress((token))) {
    return console.log('Invalid token address')
    return false
  }

  const jsonRpcUrl = process.env.JSON_RPC_URL!
  const privKey = process.env.PRIVATE_KEY_DEPLOY!
  const wallet = new ethers.Wallet(privKey, new ethers.providers.JsonRpcProvider(jsonRpcUrl));

  const rewardsRedeemerFactory = new ethers.Contract(config.rewardsRedeemerFactory, rewardsRedeemerFactoryAbi, wallet);

  switch (action) {
    case 'get':
      const exsitingRedeemerAddr = await rewardsRedeemerFactory.redeemers(address)

      console.log(`EXISTING REDEEMER ${exsitingRedeemerAddr} for partner ${address}`)
      break;
    case 'create':
      const createTx = await rewardsRedeemerFactory.createRewardsRedeemer(token)
      createTx.wait()
      console.log(`REDEEMER CREATED ${address} for partner ${address} `)
      break;

    default:
      console.log('Invalid action')
      return false
  }

  process.exit(0)
}

main()
