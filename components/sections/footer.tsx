"use client"

export function Footer() {
  return (
    <footer className="py-8 bg-foreground border-t border-background/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-2xl text-background">
            La Cucina
          </div>
          <p className="font-sans text-sm text-background/50 text-center">
            © {new Date().getFullYear()} La Cucina. Todos os direitos reservados.
          </p>
          <p className="font-sans text-sm text-background/50">
            Curitiba, PR
          </p>
        </div>
      </div>
    </footer>
  )
}
