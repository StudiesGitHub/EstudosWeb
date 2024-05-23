import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../images/Logo.png'

export function Header() {
  return (
    <div className="flex justify-between px-48 py-10">
      <img src={Logo} />
      <div className="flex">
        <button className="bg-[#EBE5F9] rounded-md flex items-center">
          <MapPin color="#4B2995" size={32} /> Porto Alegre, RS
        </button>
        <button className="bg-[#F1E9C9] rounded-md">
          <ShoppingCart color="#C47F17" size={32} />
        </button>
      </div>
    </div>
  )
}
