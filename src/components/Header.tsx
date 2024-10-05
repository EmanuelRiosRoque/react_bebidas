import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import {NavLink, useLocation}  from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";


export default function Header() {
    
    const [searchFilter,setSearchFilter] = useState({
      ingredient: '',
      category: ''
    })

    const {pathname} = useLocation()    
    const isHome = useMemo(()=> pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)

    useEffect(() => {
      fetchCategories()
    }, [])

    const handleChange =  (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      setSearchFilter({
        ...searchFilter,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Validar
      if (Object.values(searchFilter).includes('')) {
        console.log("Todos los campos son obligatorios");
        return
      }

      // Consultar resetas
      searchRecipes(searchFilter)
    }

    return (
      <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex items-center justify-between">
            <div>
                <img className="w-32" src="/logo.svg" alt="logotipo" />
            </div>
            <nav className="flex gap-4">
              <NavLink 
                className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' } 
                to="/"
              >
                  Inicio
              </NavLink>
              <NavLink 
                className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' } 
                to="/favoritos"
              >
                Favoritos
              </NavLink>
            </nav>
          </div>

          {isHome && (
            <form 
              className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                <label htmlFor="ingredient" className="block text-lg font-extrabold text-white uppercase">Nombre O Ingredientes</label>
                <input 
                  type="text" 
                  id="ingredient" 
                  name="ingredient"
                  className="w-full p-3 rounded-lg focus:outline-none" 
                  placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe" 
                  onChange={handleChange}
                  value={searchFilter.ingredient}
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="category" className="block text-lg font-extrabold text-white uppercase">Categoria</label>
                <select  
                    name="category"
                    id="category" 
                    className="w-full p-3 rounded-lg focus:outline-none"
                    onChange={handleChange}
                    value={searchFilter.category}
                    >
                    
                    <option value="">-- Seleccione --</option>
                    {categories.drinks.map(category => (
                      <option 
                      value={category.strCategory}
                      key={category.strCategory}
                      >
                        {category.strCategory}
                      </option>
                    ))}
                </select>
              </div>


              <input 
                type="submit" 
                value="Buscar Recetas"
                className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange-900"
              />
            </form>
          )}
        </div>
      </header>      
    );
  }
  