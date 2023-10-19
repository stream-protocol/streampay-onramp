import { SupportedFiatCode, SupportedMethods } from "./types";

export type Ad = {
  token: string;
  fiat: {
    code: string;
    country: string;
  };
  seller: {
    account_name: string;
    iban?: string;
    account_number: string;
    bank_name: string;
    email: string;
  };
  method: SupportedMethods;
  price: number;
};

export interface Token {
  symbol: string;
  address: string;
}

export interface Fiat {
  code: string;
  symbol: string;
  icon: string;
}

export default class Api {
  private fiats: Record<SupportedFiatCode, Fiat> = {
    EUR: { code: "EUR", symbol: "€", icon: "🇪🇺" },
    USD: { code: "USD", symbol: "$", icon: "🇺🇸" },
    GBP: { code: "GBP", symbol: "£", icon: "🇬🇧" },
    AED: { code: "AED", symbol: "د.إ", icon: "🇦🇪" },
    NGN: { code: "NGN", symbol: "₦", icon: "🇳🇬" },
  };

  private tokens: Token[] = [
    { symbol: "sEUR", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" },
    { symbol: "USDT", address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" },
    { symbol: "USDT", address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" },
  ];

  private tokens: Token[] = [{symbol: "sEUR", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"}. {symbol: "USDT", address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"}, {symbol: "USDC", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"}]
  private ads: Ad[] = [
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "EUR",
        country: "FIN",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Nordea Bank",
        email: "contact@streampayments.org",
      },
      price: 3.65,
      method: "bank",
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "EUR",
        country: "FIN",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Nordea Bank",
        email: "contact@streampayments.org",
      },
      price: 3.65,
      method: "wise",
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "EUR",
        country: "FIN",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Nordea Bank",
        email: "contact@streampayments.org",
      },
      price: 3.65,
      method: "bank",
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "AED",
        country: "UAE",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Nordea Bank",
        email: "contact@streampayments.org",
      },
      price: 3.65,
      method: "wise",
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "StreamPayments Ltd.",
        account_number: "0126864523",
        bank_name: "Barcleys Bank",
        email: "contact@streampayments.org",
      },
      method: "wise",
      price: 3.65,
    },
  ]

  async fetchAd(filter: {
    method: SupportedMethods;
    token?: string;
    amount?: string;
    fiat?: SupportedFiatCode;
  }): Promise<Ad | undefined> {
    return this.ads.find(ad => {
      const isFiatValid = filter.fiat ? filter.fiat === ad.fiat.code : true;
      const isTokenValid = filter.token ? filter.token === ad.token : true;
      const isMethodValid = filter.method === ad.method;
      return isFiatValid && isTokenValid && isMethodValid;
    });
  }

  async fetchToken(address: string = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"): Promise<Token | undefined> {
    return this.tokens.find(token => token.address === address);
  }

  async fetchFiat(code: SupportedFiatCode): Promise<Fiat | undefined> {
    return this.fiats[code];
  }

  async moneySent(business: string, data: {
    start_time: string;
    amount: number | undefined;
    customer_email: string | undefined;
    fee: number;
    channel: string;
    recipient: string;
    end_time: string;
    currency: SupportedFiatCode;
    customer_name: string | undefined;
    token: string;
    status: string;
  }): Promise<any> {
    const response = await fetch(`http://localhost:3001/api/v1/business/${business}/transaction/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
