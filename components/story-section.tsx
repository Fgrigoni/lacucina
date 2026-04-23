import Image from "next/image";

export function StorySection() {
  return (
    <section id="nossa-historia" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Nossa História
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-8">
              Presença onde
              <br />
              importa
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A La Cucina nasceu de uma mesa de família e de uma frustração
                simples: não encontrávamos um molho pronto que tivesse o sabor
                de uma panela cozinhada com atenção. Os que existiam eram
                rápidos demais, cheios demais, barulhentos demais.
              </p>
              <p>
                Decidimos fazer o nosso próprio. Tomates italianos selecionados,
                azeite extra-virgem português, alho fresco e sal marinho.
                Cozinhamos por quatro horas em fogo baixo — sem pressa, sem
                atalho.
              </p>
              <p>
                O que começou como ritual de domingo foi virando pedido de
                vizinho, depois de amigos, depois de desconhecidos que ouviram
                falar. Hoje produzimos em pequenos lotes para manter a qualidade
                de sempre: artesanal, honesto, saboroso.
              </p>
            </div>

            <p className="font-serif text-lg italic mt-8 text-foreground">
              {'"O tempo que você não tem, no sabor que você merece."'}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/cooking.jpg"
              alt="Cozinhando molho artesanal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
