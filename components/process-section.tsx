const steps = [
  {
    number: "01",
    title: "Seleção",
    description:
      "Escolhemos tomates no ponto certo — nem verdes, nem maduros demais. Cada lote começa com os melhores.",
  },
  {
    number: "02",
    title: "Cozimento",
    description:
      "Quatro horas em fogo baixo. Mexemos com paciência. Não deixamos apressar o que precisa de tempo.",
  },
  {
    number: "03",
    title: "Envase",
    description:
      "Envasamos a quente em vidros esterilizados, selados à vácuo. Sem aditivos, sem truque.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            O Processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic">
            Do tomate ao pote
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <span className="font-serif text-6xl text-muted-foreground/30">
                {step.number}
              </span>
              <h3 className="font-serif text-xl mb-3 -mt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
