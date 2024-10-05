import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`}
                className="transition-transform hover:scale-125 hover:rotate-2"
            />
        </div>

        <div className="p-5">
            <h2 className="text-2xl font-black truncate">{drink.strDrink}</h2>
            <button
                type="button"
                className="w-full p-3 mt-5 text-lg font-bold text-white bg-orange-400 hover:bg-orange-500"
            >
                Ver Receta
            </button>
        </div>



    </div>
  )
}
