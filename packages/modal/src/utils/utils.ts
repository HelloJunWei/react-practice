export const uuid4 = (): string => {
  const arr = new Uint8Array(16)
  crypto.getRandomValues(arr)

  // Manipulate the 9th byte
  arr[8] &= 0b00111111 // Clear the first two bits
  arr[8] |= 0b10000000 // Set the first two bits to 10

  // Manipulate the 7th byte
  arr[6] &= 0b00001111 // Clear the first four bits
  arr[6] |= 0b01000000 // Set the first four bits to 0100

  const pattern = "$XXXXXXXX-XXXX"
  let idx = 0

  return pattern.replace(
    /XX/g,
    () => arr[idx++].toString(16).padStart(2, "0"), // padStart ensures a leading zero, if needed
  )
}

export const sleep = (ms: number):Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve() 
    }, ms)
  })
}
