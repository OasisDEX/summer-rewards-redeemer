import rewardsRedeemerFactoryAbi from '../abi/contracts/RewardsRedeemerFactory.sol/RewardsRedeemerFactory.json'
import { ethers } from 'ethers'
import stdio from 'stdio';
import "../bootstrap-env";

const config = {
  'rewardsRedeemerFactory': '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
}

async function main() {

  const ops = stdio.getopt({
    'action': { key: 'action', args: 1, description: `Action: 'add' or 'remove' partner` },
    'address': { key: 'address', args: 1, description: `Partner address` },
  });

  if (!ops) return false

  const action = ops.action as string
  const address = ops.address as string

  if (!ethers.utils.isAddress((address))) {
    return console.log('Invalid partner address')
    return false
  }

  const jsonRpcUrl = process.env.JSON_RPC_URL!
  const privKey = process.env.PRIVATE_KEY_DEPLOY!
  const wallet = new ethers.Wallet(privKey, new ethers.providers.JsonRpcProvider(jsonRpcUrl));

  const rewardsRedeemerFactory = new ethers.Contract(config.rewardsRedeemerFactory, rewardsRedeemerFactoryAbi, wallet);

  switch (action) {
    case 'add':
      const addTx = await rewardsRedeemerFactory.addPartner(address)
      addTx.wait()
      console.log(`PARTNER WHITELISTED: ${address}`)
      break;
    case 'remove':
      const removeTx = await rewardsRedeemerFactory.removePartner(address)
      removeTx.wait()
      console.log(`PARTNER REMOVED FROM WHITELIST: ${address}`)
      break;

    default:
      console.log('Invalid action')
      return false
  }

  process.exit(0)
}

main()
