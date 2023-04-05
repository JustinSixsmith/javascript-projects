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

export async function fetchRates(from = 'USD') {
  const response = await fetch(`${endpoint}?base=${from}`);
  const rates = await response.json();
  console.log(rates);
}

export async function convert(amount, from, to) {
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
