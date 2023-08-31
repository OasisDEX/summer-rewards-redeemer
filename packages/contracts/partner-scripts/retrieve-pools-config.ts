import { Contract, ethers } from 'ethers'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545', 2137)
  const signer = provider.getSigner(0)

  console.log('SIGNER ADDRESS', await signer.getAddress() );

}

main()
