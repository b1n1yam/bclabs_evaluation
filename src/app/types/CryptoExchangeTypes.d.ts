export type CryptoCurrency = 'BTC' | 'ETH' | 'BNB' | 'ADA' | 'DOT' | 'DOGE' | 'ALGO' | 'UNI' | 'COMP';

export interface ExchangeRate {
  USD: number;
  rate: number;
  logo: string;
}

export type ExchangeRates = {
  [key in CryptoCurrency]: ExchangeRate;
};
