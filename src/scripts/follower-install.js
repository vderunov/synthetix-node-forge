import { downloadFollower, followerDaemon, followerKill } from '../server/follower';

async function main() {
  await downloadFollower();
  await followerDaemon();
}

process.on('beforeExit', followerKill);
main();
