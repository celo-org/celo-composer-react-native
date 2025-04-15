# React Native | Celo Composer

This is a community-created and maintained starter kit, designed to help you quickly launch your project on the Celo blockchain. It comes preconfigured with NativeWindCSS for styling, WalletConnect for seamless wallet integration, and Wagmi for handling on-chain transactions.

## Setup & Installation

1. Go to `packages/react-native` directory and create a copy of `.env.example` and rename it to `.env`.

2. Create a WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/). Provide the WalletConnect Cloud Project ID in your `.env` file to use WalletConnect in your project. As shown in the `.env.example` file.

  ```bash
   PROJECT_ID="YOUR_WALLET_CONNECT_ID"
   ```

3. Install dependencies

   ```bash
   yarn
   ```

4. Run the app

   ```bash
   ## in the root dir
   
    yarn app:start

   ```
5. Open app in Expo Go by scanning the QR code generated on the terminal
   
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Deploy a Smart Contract

Find the detailed instructions on how to run your smart contract in [packages/hardhat/README.md](./packages/hardhat/README.md).

For quick development follow these three steps:

1. Change `packages/hardhat/env.template` to `packages/hardhat/env` and add your `PRIVATE_KEY` into the `.env` file.
2. Make sure your wallet is funded when deploying to testnet or mainnet. You can get test tokens for deploying it on Alfajores from the [Celo Faucet](https://faucet.celo.org/alfajores).
3. Run the following commands from the `packages/hardhat` folder to deploy your smart contract to the Celo Testnet Alfajores:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network alfajores
```


## Support

Join the Celo Discord server at <https://chat.celo.org>. Reach out on the dedicated repo channel [here](https://discord.com/channels/600834479145353243/941003424298856448).

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/celo-org/celo-composer-react-native) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

- [@CeloDevs](https://twitter.com/CeloDevs)
- [Discord](https://discord.com/invite/celo)
