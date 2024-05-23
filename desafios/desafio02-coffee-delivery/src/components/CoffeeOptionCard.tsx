interface ICoffeeOptionCard {
  coffeeOption: string
}

export function CoffeeOptionCard({ coffeeOption }: ICoffeeOptionCard) {
  return (
    <div>
      <h1>{coffeeOption}</h1>
      <h1>CAFE</h1>
      <h1>CAFE</h1>
    </div>
  )
}
