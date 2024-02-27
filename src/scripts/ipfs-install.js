import { downloadIpfs, ipfsDaemon, ipfsTeardown } from '../server/ipfs';

async function main() {
  await downloadIpfs();
  await ipfsDaemon();
}

process.on('beforeExit', ipfsTeardown);
main();
