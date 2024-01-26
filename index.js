const { lookupArchive } = require("@subsquid/archive-registry");

const processor = new SubstrateBatchProcessor()
  // the lookupArchive() call resolves to
  // 'https://v2.archive.subsquid.io/network/phala'
  .setGateway(lookupArchive("subsocial-parachain", { release: "ArrowSquid" }))
  //   .setRpcEndpoint("wss://para.f3joule.space");
  .setRpcEndpoint("wss://rpc.polkadot.io");

async function main() {
  try {
    await processor;

    // ... do some processing ...

    await processor.stop();
  } catch (error) {
    console.error("Error during application startup:", error);
  }
}

main();
