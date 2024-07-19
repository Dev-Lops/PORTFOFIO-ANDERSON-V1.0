import { cn } from "@/lib/utils"
import { CardStacks } from "./CardStacks"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function CardAbout (){
  return (
    <Card className={cn("w-auto h-[700px] md:w-[900px] md:h-[600px]")}>
      <CardHeader>
        <CardTitle>Sobre mim</CardTitle>
      </CardHeader>
      <CardContent className="grid w-[300px] justify-center text-justify ml-[40px] rounded-md md:w-[820px] md:center">
        <div className="text-md text-foreground ">
          <p>
            Olá! Sou um profissional altamente dedicado e apaixonado pela área de tecnologia. Estou atualmente cursando dois bacharelados: Engenharia de Software pela Estácio e Análise e Desenvolvimento de Sistemas pela UniNorte.
          </p>
          <p>
              Com uma sólida base em HTML, CSS, JavaScript, ReactJS, NodeJS, e Express, estou pronto para desenvolver soluções tecnológicas que otimizem processos, reduzam custos e melhorem a qualidade dos serviços prestados. Minha abordagem foca na integração tecnológica como o caminho para o futuro.
          </p>

          <p>
            Meus projetos no GitHub refletem minha dedicação e habilidade em resolver problemas reais com soluções criativas e eficientes. Além disso, tenho várias certificações importantes que comprovam meu comprometimento com o desenvolvimento contínuo na área de front-end.
              </p>

          <p>
            Se você está procurando alguém apaixonado, comprometido e com um olhar atento para inovações tecnológicas, estou pronto para fazer parte do seu time e juntos, alcançarmos grandes resultados.
          </p>



        </div>
      </CardContent>
      <CardStacks/>
    </Card>
  )
}
