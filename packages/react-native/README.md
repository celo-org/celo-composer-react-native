# React Native | Celo Composer

This is a community-created and maintained starter kit, designed to help you quickly launch your project on the Celo blockchain. It comes preconfigured with NativeWindCSS for styling, WalletConnect for seamless wallet integration, and Wagmi for handling on-chain transactions.

## Setup & Installation

1. Create a copy of `.env.example` and rename it to `.env`.

2. Create a WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/). Provide the WalletConnect Cloud Project ID in your `.env` file to use WalletConnect in your project. As shown in the `.env.example` file.

  ```bash
   PROJECT_ID="YOUR_WALLET_CONNECT_ID"
   ```

3. Install dependencies

   ```bash
   yarn 
   ```

4. Start the app

   ```bash
    npx expo start
   ```
5. Open app in Expo Go by scanning the QR code generated on the terminal
   
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


