const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'TWD', maximumSignificantDigits: 3 })
export default function (number: number) {
  return CURRENCY_FORMATTER.format(number)

}
