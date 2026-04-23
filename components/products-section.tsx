"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5541995025425";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const products = [
  {
    id: 1,
    category: "CLÁSSICO",
    name: "Tomate + Tomate",
    description: "O essencial do nosso fogão",
    badge: "MAIS VENDIDO",
    badgeColor: "bg-primary",
    image: "/images/tomate-tomate.jpeg",
    ingredients: [
      { name: "Tomate italiano pelado", percentage: "82%" },
      { name: "Azeite extra-virgem", percentage: "" },
      { name: "Alho fresco", percentage: "" },
    ],
    size: "300G",
    price: 28.9,
  },
  {
    id: 2,
    category: "COM MANJERICÃO",
    name: "Tomate + Manjericão",
    description: "Verão numa colherada",
    badge: null,
    badgeColor: "",
    image: "/images/tomate-manjericao.jpeg",
    ingredients: [
      { name: "Tomate italiano maduro", percentage: "78%" },
      { name: "Manjericão fresco", percentage: "8%" },
      { name: "Azeite extra-virgem", percentage: "" },
    ],
    size: "300G",
    price: 29.9,
  },
];

export function ProductsSection() {
  const handleBuyClick = (productName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido do molho ${productName}.`
    );
    window.open(`${WHATSAPP_URL}?text=${message}`, "_blank");
  };

  return (
    <section id="molhos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Nossos Molhos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-4">
            Feitos com o que importa
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada pote é um pequeno lote cuidado à mão, do tomate ao rótulo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div className="relative aspect-square mb-6 rounded-lg overflow-hidden bg-muted">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full z-10`}
                  >
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="space-y-2 mb-6">
                  {product.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm text-muted-foreground"
                    >
                      <span>{ing.name}</span>
                      {ing.percentage && <span>{ing.percentage}</span>}
                    </div>
                  ))}
                </div>

                {/* Size Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-primary text-primary-foreground py-2 px-6 rounded-full text-sm">
                    {product.size}
                  </span>
                </div>

                {/* Price & Add */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <Button
                    onClick={() => handleBuyClick(product.name)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
