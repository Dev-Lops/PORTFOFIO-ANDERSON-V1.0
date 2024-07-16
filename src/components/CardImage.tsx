import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function CardImage (){
  return(
    <Avatar className="w-36 h-36">
      <AvatarImage src="https://avatars.githubusercontent.com/Dev-Lops" />
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  )
}
