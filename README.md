# StreamPay Onramp

![StreamPay Logo](path_to_logo.png)

Stream**Pay** Onramp is a seamless crypto payment solution, bridging the gap between traditional and cryptocurrency payments. Accept cryptocurrency payments effortlessly, even from non-crypto users.

## Monorepo´s

Project APIs, web apps, widget, and more.

**1. API**
**2. Platform**
**3- Widget**

## 🌟 Features

- **Multiple Payment Options:** Including Bank Transfer, TransferWise, and QR Code for crypto-savvy users.
- **Low Transaction Fees:** Just 0.5% per transaction, capped at $10.
- **Real-Time Messaging:** Instant communication between buyers and sellers.
- **User-Friendly Interface:** Designed for non-crypto users.
- **Versatile Integrations:** Compatible with ReactJs, VueJs, Medusa, WordPress, and Shopify.
- **Instant Conversion & Payouts:** Convert USDC, EURC, and USDT to fiat instantly.
- **Secure Transactions:** Reliable and secure processing.

## 📌 Table of Contents

- [StreamPay Onramp](#streampay-onramp)
  - [Monorepo´s](#monorepos)
  - [🌟 Features](#-features)
  - [📌 Table of Contents](#-table-of-contents)
  - [🛠 Installation](#-installation)
  - [Getting Started](#getting-started)
  - [🚀 Usage](#-usage)
  - [🔗 Integration](#-integration)
  - [🤝 Support](#-support)
  - [📜 License](#-license)
- [Todo](#todo)


## 🛠 Installation

```bash
npm install streampay-onramp
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🚀 Usage

```javascript
const StreamPay = require('streampay-onramp');

const payment = new StreamPay({
    apiKey: 'YOUR_API_KEY',
    mode: 'production' // or 'sandbox'
});

payment.init();
```

## 🔗 Integration

For detailed steps on integrating Stream**Pay** Onramp into various platforms, refer to our [Integration Guide](link_to_integration_guide.md).

## 🤝 Support

For any queries or issues, please reach out to our [support team](link_to_support).

## 📜 License

Stream**Pay** Onramp is licensed under [MIT]. For more details, see the [LICENSE](LICENSE) file.

# Todo

Stream EURO Stablecoin (sEUR) Program

private tokens: Token[] = [{symbol: "sEUR", address: "Program address here!"}
