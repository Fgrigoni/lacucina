import Image from "next/image";
import { Clock, Users } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Spaghetti al Pomodoro",
    description:
      "O clássico intemporal em sua forma mais pura. Com nosso Pomodoro Clássico, cada garfada conta uma história.",
    image: "/images/recipes/spaghetti.jpg",
    time: "20 MIN",
    servings: "2 PESSOAS",
    difficulty: "FÁCIL",
    sauce: "POMODORO CLÁSSICO",
  },
  {
    id: 2,
    title: "Bruschetta al Pomodoro",
    description:
      "Pão rústico, molho fresco e o azeite certo. Um aperitivo que vira protagonista.",
    image: "/images/recipes/bruschetta.jpg",
    time: "15 MIN",
    servings: "4 PESSOAS",
    difficulty: "FÁCIL",
    sauce: "POMODORO CLÁSSICO",
  },
  {
    id: 3,
    title: "Pizza Margherita Artesanal",
    description:
      "A base perfeita começa com o molho certo. Nossa versão napolitana de fim de semana.",
    image: "/images/recipes/pizza.jpg",
    time: "45 MIN",
    servings: "2 PESSOAS",
    difficulty: "MÉDIO",
    sauce: "POMODORO CLÁSSICO",
  },
  {
    id: 4,
    title: "Risoto ao Molho de Tomate",
    description:
      "Cremoso, reconfortante e surpreendentemente simples de fazer bem.",
    image: "/images/recipes/risoto.jpg",
    time: "35 MIN",
    servings: "2 PESSOAS",
    difficulty: "MÉDIO",
    sauce: "POMODORO & MANJERICÃO",
  },
  {
    id: 5,
    title: "Shakshuka Arrabbiata",
    description:
      "Ovos pochados no molho apimentado — o café da manhã que é prato principal.",
    image: "/images/recipes/shakshuka.jpg",
    time: "25 MIN",
    servings: "2 PESSOAS",
    difficulty: "FÁCIL",
    sauce: "ARRABBIATA",
  },
  {
    id: 6,
    title: "Lasanha à La Cucina",
    description:
      "Camadas de sabor construídas com cuidado. Porque o domingo merece o melhor.",
    image: "/images/recipes/lasanha.jpg",
    time: "1H 20MIN",
    servings: "6 PESSOAS",
    difficulty: "ELABORADO",
    sauce: "POMODORO CLÁSSICO",
  },
];

const difficultyColors: Record<string, string> = {
  FÁCIL: "bg-foreground/80",
  MÉDIO: "bg-foreground/80",
  ELABORADO: "bg-foreground/80",
};

export function RecipesSection() {
  return (
    <section id="receitas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Receitas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-4">
            O que fazer com
            <br />
            um pote de La Cucina
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Receitas simples, ingredientes reais e um molho que já faz metade do
            trabalho.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                <span
                  className={`absolute top-4 left-4 ${
                    difficultyColors[recipe.difficulty]
                  } text-white text-xs font-medium px-3 py-1 rounded-full z-10`}
                >
                  {recipe.difficulty}
                </span>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {recipe.time}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {recipe.servings}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-lg mb-2">{recipe.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {recipe.description}
              </p>

              {/* Sauce */}
              <p className="text-xs tracking-[0.1em] text-primary uppercase">
                USA: {recipe.sauce}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
