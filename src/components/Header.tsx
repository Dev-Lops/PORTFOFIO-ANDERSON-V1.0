import { Contact, FolderKanban, Home } from "lucide-react"
import { NavLink } from "./nav-link"
import { ModeToggle } from "./theme/modo-toggle"
import { Separator } from "./ui/separator"

import LogoImg from "../assets/logo.png"



export function Header() {
  return(
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <NavLink to='/' className="h-16 w-16 filter dark:invert">
          <img src={LogoImg} alt="logo"/>
      </NavLink>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center justify-between space-x-4 lg:space-x-6">
          <NavLink to="/projects">
            <FolderKanban className="h-4 w-4" />
            Projetos
          </NavLink>
          <NavLink to="/contacts">
            <Contact  className="h-4 w-4" />
            Contato
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />

        </div>
      </div>
    </div>
  )
}
