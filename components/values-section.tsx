import { CheckCircle, Clock, Hand, Eye } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Sem conservantes",
    description:
      "Apenas ingredientes que você reconhece numa lista. Tomate, azeite, alho, sal, ervas. Ponto final.",
  },
  {
    icon: Clock,
    title: "Cozimento lento",
    description:
      "Quatro horas em fogo baixo para cada pote. Não existe atalho para o sabor verdadeiro.",
  },
  {
    icon: Hand,
    title: "Receita artesanal",
    description:
      "Cada lote é preparado em pequena quantidade, com atenção e com as mãos certas.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    description:
      "Ingredientes, gramatura, lote e validade visíveis no rótulo. Nada escondido.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            O que nos move
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic">
            O segredo está
            <br />
            nos ingredientes
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
