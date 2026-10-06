export const metadata = {
  title: "Sarah Restaurante | Cocina Italiana y Alemana en Santo Domingo",
  description:
    "Sarah Restaurante en Av. Sarasota 104, Santo Domingo. Pasta artesanal, bratwurst, pizzas y cocina mediterránea en un ambiente cálido y familiar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
