import { CardProfile } from "@/components/CardProfile"
import { Header } from "@/components/Header"

export function Home(){
  return (
    <>
      <Header/>

      <div className="flex items-center justify-center pt-8 gap-5">
        <div className="grid grid-cols-3 col-span-2">
          <div className="justify-items-center">
            <CardProfile />
          </div>
          <div className="col-span-2"><h2>Tecnologias</h2></div>
        </div>
      </div>
    </>
  )
}
