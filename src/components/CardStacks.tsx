
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

import CssIcon from '../assets/CSS3_logo.svg'
import HtmlIcon from '../assets/HTML5_Badge.svg'
import ReactIcon from '../assets/React-icon.svg'
import TailwindIcon from '../assets/Tailwind_CSS_Logo.svg'
import JavaScriptIcon from '../assets/Unofficial_JavaScript_logo_2.svg'
import TypeScriptIcon from '../assets/Typescript.svg'


type CardProps = React.ComponentProps<typeof Card>

export function CardStacks({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-auto h-[600px] md:w-[820px] md:h-[600px]", className)} {...props}>
      <CardHeader className="mb-12">
        <CardTitle className="pb-2">Stacks</CardTitle>
      </CardHeader>
      <CardContent className="grid w-[300px] justify-center gap-6 p-11 mt-32 ml-[110px] rounded-md border md:w-[600px]">
        <div className="flex space-x-9">


          <div className="w-20 h-20">
            <img src={HtmlIcon} alt="HTML5" />
          </div>

          <div className="w-20 h-20">
            <img src={CssIcon} alt="CSS3" />
          </div>

          <div className="w-20 h-20">
            <img src={JavaScriptIcon} alt="JAVASCRIPT" />
          </div>

          <div className="w-20 h-20">
            <img src={ReactIcon} alt="REACTJS" />
          </div>


        </div>
        <div className="flex space-x-9 mt-2">
          <div className="w-20 h-20 mt-2">
            <img src={TailwindIcon} alt="TAILWINDCSS" />
          </div>
          <div className="w-20 h-20">
            <img src={TypeScriptIcon} alt="" />
          </div>
          <div className="w-20 h-20">
            <img src={CssIcon} alt="" />
          </div>
          <div className="w-20 h-20">
            <img src={CssIcon} alt="" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
