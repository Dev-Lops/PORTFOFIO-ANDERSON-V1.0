import { CardAbout } from "@/components/CardAbout"
import { CardProfile } from "@/components/CardProfile"
import { Header } from "@/components/Header"

export function Home(){
  return (
    <>
      <Header/>

      <div className="flex items-center justify-center pt-8 gap-5 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <div className="md:flex">
          <div className="grid grid-cols-1 col-span-2 gap-5 md:grid-cols-3">
            <div className="">
              <CardProfile />
            </div>
            <div className="grid col-span-2 md:col-span-1">
              <CardAbout/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
