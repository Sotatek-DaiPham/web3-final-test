import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org";

const NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027`,
  4: `https://rinkeby.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027`,
  5: `https://goerli.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027`,
};

export const injected = new InjectedConnector({ supportedChainIds: [1, 4, 5] });

export const walletConnectConnector = new WalletConnectConnector({
  supportedChainIds: [1, 4, 5],
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
});
