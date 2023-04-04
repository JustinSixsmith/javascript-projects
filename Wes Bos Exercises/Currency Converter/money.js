const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const ratesByBase = {};
// const endpoint = 'https://api.apilayer.com/exchangerates_data/convert';
const endpoint = 'https://api.exchangeratesapi.io/latest';
var myHeaders = new Headers();
myHeaders.append('apikey', 'FKS9ifmya70f7cHMToa81DZX6MFM69lt');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

// fetch("https://api.apilayer.com/exchangerates_data/convert?to=to&from=from&amount=amount", requestOptions)

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

async function fetchRates(from = 'USD') {
  const response = await fetch(`${endpoint}?base=${from}`);
  const rates = await response.json();
  console.log(rates);
}

async function convert(amount, from, to) {
  // First check if we have a cached result
  if (!ratesByBase[from]) {
    console.log(`Oh no! We don't have ${from} to conver to ${to}`);
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }
  // Convert the ammount that was passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = amount * rate;
  return convertedAmount;
}

const optionsHTML = generateOptions(currencies);
// Populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
