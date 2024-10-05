import { Outlet } from "react-router-dom"
import Header from "../components/Header"


export default function Layout() {
  return (
    <>
        <Header/>
        <main className="container py-16 mx-auto">
            <Outlet/>
        </main>
    </>
  )
}
