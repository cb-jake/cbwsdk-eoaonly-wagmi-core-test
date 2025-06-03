'use client'

import { getAccount, getConnectors } from '@wagmi/core'
import { getConfig } from '@/wagmi'
import { useEffect, useState } from 'react';

export default function App() {
  const [_, setAccount] = useState<any>(null);

  useEffect(() => {
    (() => {
      const account_ = getAccount(getConfig());
      console.log(account_);
      setAccount(account_);
    })()
  }, []);

  const connectors = getConnectors(getConfig());

  return (
    <div>
      <h2>Connect</h2>
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connector.connect()}
          type="button"
        >
          {connector.name}
        </button>
      ))}
    </div>
  )
}
