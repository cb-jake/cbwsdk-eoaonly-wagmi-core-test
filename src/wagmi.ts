import { http, cookieStorage, createConfig, createStorage } from '@wagmi/core'
import { coinbaseWallet } from '@wagmi/connectors'
import { mainnet, sepolia } from 'viem/chains'  

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      coinbaseWallet({
        appName: 'EOA Only Test',
        preference: "eoaOnly"
      }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })
}
