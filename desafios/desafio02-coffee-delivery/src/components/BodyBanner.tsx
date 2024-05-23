import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import Cup from '../images/CoffeDeliveryCup.png'

export function BodyBanner() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="py-8">
          <h1 className="font-extrabold text-4xl">
            Encontre o cafe perfeito para qualquer hora do dia
          </h1>
          <h3>
            Com o Coffe Delivery voce recebe seu cafe onde estiver, a qualquer
            hora
          </h3>
        </div>
        <div className="flex gap-8 py-10">
          <div className="flex flex-col gap-4">
            <span className="flex gap-x-2">
              <div className="bg-[#C47F17] rounded-full w-7 h-7 flex items-center justify-center">
                <ShoppingCart color="white" />
              </div>
              <h1>Compra simples e segura</h1>
            </span>
            <span className="flex gap-x-2">
              <div className="bg-[#DBAC2C] rounded-full w-7 h-7 flex items-center justify-center">
                <Timer color="white" />
              </div>
              <h1>Entrega rapida e rastreada</h1>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex gap-x-2">
              <div className="bg-[#574F4D] rounded-full w-7 h-7 flex items-center justify-center">
                <Package color="white" />
              </div>
              <h1>Embalagem mantem o cafe intacto</h1>
            </span>
            <span className="flex gap-x-2">
              <div className="bg-[#8047F8] rounded-full w-7 h-7 flex items-center justify-center">
                <Coffee color="white" className="bg-[#8047F8] rounded-full" />
              </div>
              <h1>O cafe chega fresquinho ate voce</h1>
            </span>
          </div>
        </div>
      </div>
      <img src={Cup} />
    </div>
  )
}
