"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    category: "CLÁSSICO",
    name: "Pomodoro Clássico",
    description: "O essencial do nosso fogão",
    badge: "MAIS VENDIDO",
    badgeColor: "bg-primary",
    image: "/images/pomodoro-classico.jpg",
    ingredients: [
      { name: "Tomate italiano pelado", percentage: "82%" },
      { name: "Azeite extra-virgem", percentage: "" },
      { name: "Alho fresco", percentage: "" },
    ],
    sizes: [
      { label: "200G", price: 18.9 },
      { label: "350G", price: 28.9 },
      { label: "500G", price: 38.9 },
    ],
  },
  {
    id: 2,
    category: "APIMENTADO",
    name: "Arrabbiata",
    description: "Para quem gosta do calor da vida",
    badge: "NOVO",
    badgeColor: "bg-primary",
    image: "/images/arrabbiata.jpg",
    ingredients: [
      { name: "Tomate San Marzano pelado", percentage: "80%" },
      { name: "Azeite extra-virgem", percentage: "" },
      { name: "Alho fresco", percentage: "" },
    ],
    sizes: [
      { label: "200G", price: 19.9 },
      { label: "350G", price: 29.9 },
      { label: "500G", price: 39.9 },
    ],
  },
  {
    id: 3,
    category: "COM MANJERICÃO",
    name: "Pomodoro & Manjericão",
    description: "Verão numa colherada",
    badge: null,
    badgeColor: "",
    image: "/images/pomodoro-manjericao.jpg",
    ingredients: [
      { name: "Tomate italiano maduro", percentage: "78%" },
      { name: "Manjericão fresco", percentage: "8%" },
      { name: "Azeite extra-virgem", percentage: "" },
    ],
    sizes: [
      { label: "200G", price: 19.9 },
      { label: "350G", price: 29.9 },
      { label: "500G", price: 39.9 },
    ],
  },
];

export function ProductsSection() {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, number>>({
    1: 1,
    2: 1,
    3: 1,
  });

  const handleSizeChange = (productId: number, sizeIndex: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIndex }));
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
        <div className="grid md:grid-cols-3 gap-8">
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

                {/* Size Selector */}
                <div className="flex gap-2 mb-4">
                  {product.sizes.map((size, idx) => (
                    <button
                      key={size.label}
                      onClick={() => handleSizeChange(product.id, idx)}
                      className={`flex-1 py-2 px-4 rounded-full text-sm transition-colors ${
                        selectedSizes[product.id] === idx
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>

                {/* Price & Add */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-primary">
                    R${" "}
                    {product.sizes[selectedSizes[product.id]].price
                      .toFixed(2)
                      .replace(".", ",")}
                  </span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    Adicionar
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
