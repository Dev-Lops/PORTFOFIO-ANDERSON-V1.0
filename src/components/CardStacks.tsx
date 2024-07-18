
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { cn } from "@/lib/utils"



type CardProps = React.ComponentProps<typeof Card>

export function CardStacks({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full h-[700px] md:w-full md:h-[600px]", className)} {...props}>
      <CardContent className="grid grid-rows-4 w-[300px] justify-center ml-[110px] rounded-md md:w-[700px]">
        <div className="flex mt-5 space-x-9">
          <div >
            <img className="w-32 h-6" src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt="HTML5" />
          </div>

          <div>
            <img className="w-32 h-6" src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt="CSS3" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
          </div>


          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="REACTJS" />
          </div>


        </div>

        <div className="flex space-x-9 mt-5">

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vuejs" title="VueJs"/>
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwindcss" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
          </div>

        </div>



                <div className="flex space-x-9 mt-5">
                  <div >
                    <img className="w-32 h-6" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                  </div>

                  <div >
                    <img className="w-32 h-6" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                  </div>

                  <div >
                    <img className="w-32 h-6" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="NextJs" />
                  </div>

                  <div >
                    <img className="w-32 h-6" src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="jQuery" />
                  </div>

                </div>

        <div className="flex space-x-9 mt-5">
          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="Sass" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </div>

          <div >
            <img className="w-32 h-6" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
          </div>

        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
