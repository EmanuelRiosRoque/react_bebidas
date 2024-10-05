import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Aqui la vistas
import IndexPage from './views/IndexPage'
import FavoritosPage from './views/FavoritosPage'
import Layout from './layouts/Layout'



export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                <Route path='/' element={<IndexPage/>}/>
                <Route path='/favoritos' element={<FavoritosPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
