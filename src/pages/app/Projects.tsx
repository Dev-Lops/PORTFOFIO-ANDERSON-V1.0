import { CardProjects } from "@/components/CardProjects"
import { Header } from "@/components/Header"

export function Projects() {
  return (
    <>
    <Header/>
      <div className="flex items-center justify-center pt-8 gap-5 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <div className="md:flex">
          <div className="grid col-span-2 md:col-span-1">
            <CardProjects/>
          </div>
        </div>
      </div>
    </>
  )
}
