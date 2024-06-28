export async function GET(req: Request) {
  // Simulating a 1and a -second delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Loading the demo data
  return Response.json({
    assets: [
      {
        name: 'BTC',
        hex: '#F7931A',
        logo: 'https://utfs.io/f/2013200a-3caa-475b-8819-ccbbe39215c7-23ip.png',
        fiat: 'USD',
        lastTrade: 63000.0,
        change24h: -2.21,
        change24hValue: -1426.18,
      },
      {
        name: 'ETH',
        hex: '#627EEA',
        logo: 'https://utfs.io/f/40d739f9-e2fa-4ba8-b285-b4776e042311-25qx.png',
        fiat: 'USD',
        lastTrade: 3408.9,
        change24h: -0.33,
        change24hValue: -11.2,
      },
      {
        name: 'DOGE',
        hex: '#C3A634',
        logo: 'https://utfs.io/f/a79359f6-8f54-4c31-a53d-5173deac2e5b-1l0fkn.png',
        fiat: 'USD',
        lastTrade: 0.15,
        change24h: +15.75,
        change24hValue: 0.02,
      },
      {
        name: 'ALGO',
        hex: '#000000',
        logo: 'https://utfs.io/f/950a0b6d-1ba2-4e0e-9643-a8d88f9f551e-1s8cz.png',
        fiat: 'USD',
        lastTrade: 0.15,
        change24h: +0.0,
        change24hValue: 0.0,
      },
      {
        name: 'DOT',
        hex: '#E6007A',
        logo: 'https://utfs.io/f/e206f9bd-e0b5-4c2e-841a-788ca64e97f0-24w9.png',
        fiat: 'USD',
        lastTrade: 5.64,
        change24h: +0.0,
        change24hValue: 0.0,
      },
      {
        name: 'UNI',
        hex: '#FFFFFF',
        logo: 'https://utfs.io/f/5458b995-0773-45f6-882a-a533c1e583b6-2hgw.png',
        fiat: 'USD',
        lastTrade: 9.79,
        change24h: +0.0,
        change24hValue: 0.0,
      },
      {
        name: 'COMP',
        hex: '#00D395',
        logo: 'https://utfs.io/f/96794ca0-df7a-4115-ac92-9b0c92d89636-1tkpb.png',
        fiat: 'USD',
        lastTrade: 45.47,
        change24h: -0.95,
        change24hValue: -0.44,
      },
    ],
  });
}
