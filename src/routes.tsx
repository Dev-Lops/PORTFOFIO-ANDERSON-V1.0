import { createBrowserRouter } from "react-router-dom"

import { About } from "./pages/app/About"
import { Contacts } from "./pages/app/Contacts"
import { Home } from "./pages/app/Home"
import { Projects } from "./pages/app/Projects"

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {path: '/about', element: <About/>},
  {path: '/projects', element: <Projects/>},
  {path: '/contacts', element: <Contacts/>},
])
