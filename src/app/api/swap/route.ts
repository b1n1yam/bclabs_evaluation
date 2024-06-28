export async function GET(req: Request) {
  // Simulating a 1-second delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Loading the demo data
  return Response.json({
    BNB: { USD: 500, rate: 150, logo: 'https://utfs.io/f/59f0827c-c1ec-4097-b755-00746bbaf1bb-23di.png' },
    BTC: { USD: 75000, rate: 1, logo: 'https://utfs.io/f/2b9eb567-dfda-4784-a426-8e71f2b6d171-1k00ck.png' },
    ETH: { USD: 4500, rate: 16.67, logo: 'https://utfs.io/f/40d739f9-e2fa-4ba8-b285-b4776e042311-25qx.png' },
    DOGE: { USD: 0.15, rate: 500000, logo: 'https://utfs.io/f/a79359f6-8f54-4c31-a53d-5173deac2e5b-1l0fkn.png' },
    ALGO: { USD: 0.5, rate: 150000, logo: 'https://utfs.io/f/950a0b6d-1ba2-4e0e-9643-a8d88f9f551e-1s8cz.png' },
    DOT: { USD: 20, rate: 3750, logo: 'https://utfs.io/f/e206f9bd-e0b5-4c2e-841a-788ca64e97f0-24w9.png' },
    UNI: { USD: 10, rate: 7500, logo: 'https://utfs.io/f/5458b995-0773-45f6-882a-a533c1e583b6-2hgw.png' },
    COMP: { USD: 80, rate: 937.5, logo: 'https://utfs.io/f/96794ca0-df7a-4115-ac92-9b0c92d89636-1tkpb.png' },
  });
}
