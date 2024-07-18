import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

type CardProps = React.ComponentProps<typeof Card>
export function CardProjects({className, ...props}: CardProps){
  return(
      <Card className={cn("w-auto h-[700px] md:w-[900px] md:h-[600px]", className)}{...props}>
        <CardHeader>Projects</CardHeader>
        <CardContent>
          <h2>Projects</h2>
          <p>Here are some of my recent projects I've worked on.</p>
        </CardContent>
        <CardFooter>
          <a href="#">View all projects</a>
        </CardFooter>
      </Card>

  )
}
