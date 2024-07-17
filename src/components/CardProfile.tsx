import { Download, Github, Instagram, Linkedin, Mails, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CardImage } from "./CardImage"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"


type CardProps = React.ComponentProps<typeof Card>

export function CardProfile({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[420px]", className)} {...props}>
      <CardHeader className="grid justify-items-center">
        <CardImage/>
        <CardTitle className="pb-1">Anderson Lopes</CardTitle>
        <Badge variant="secondary" className="bg-primary text-primary-foreground">Desenvolvedor Front End</Badge>
      </CardHeader>
      <CardContent className="grid gap-4 justify-items-center">
        <div className="flex items-center space-x-4 rounded-md border border-red-700 p-2">
          <div>
            <a href="https://www.instagram.com/_dev.lops/" target="_blank" rel="noopener noreferrer" title="instagram">
              <Instagram />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/andersonloopzdev/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <Linkedin />
            </a>
          </div>
          <div>
            <a href="https://github.com/Dev-Lops" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github />
            </a>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-4 bg:opacity-20 p-2 rounded-md">
          <div className="grid grid-rows-1 grid-flow-col ">
              <div className="flex items-center row-span-2 ">
                <Phone />
              </div>
              <div className="grid col-span-2">
                <span>Phone</span>
                <strong>(92) 9 9492-1064</strong>
            </div>
          <Separator orientation="horizontal" className="w-[300px] mt-2" />
          </div>

          <div className="grid grid-rows-1 grid-flow-col gap-2">
            <div className="flex items-center row-span-2 ">
              <Mails />
            </div>
            <div className="grid col-span-2">
              <span>Email</span>
              <strong className="text-xs">Developesanderson@gmail.com</strong>
            </div>
          <Separator orientation="horizontal" className="w-[300px] mt-2" />
          </div>

          <div className="grid grid-rows-1 grid-flow-col gap-2 ">
            <div className="flex items-center row-span-2 ">
              <MapPin />
              </div>
            <div className="grid col-span-2">
              <span>Localização</span>
              <strong>Manaus - AM</strong>
            </div>
          <Separator orientation="horizontal" className="w-[300px] " />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </CardFooter>
    </Card>
  )
}
