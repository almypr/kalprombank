import { CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const products = [
  {
    title: "К",
    description: "Классическая карта для повседневных покупок",
    icon: CreditCard,
    link: "/cards/k",
  },
  {
    title: "П",
    description: "Премиальная карта с особыми привилегиями",
    icon: CreditCard,
    link: "/cards/p",
  },
  {
    title: "Д",
    description: "Дебетовая карта с высоким кэшбэком",
    icon: CreditCard,
    link: "/cards/d",
  },
  {
    title: "Б",
    description: "Бизнес-карта для предпринимателей",
    icon: CreditCard,
    link: "/cards/b",
  },
];

export const Products = () => {
  return (
    <section className="py-20 px-4 bg-bank-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bank-primary">
          Наши карты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={product.link} key={product.title}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <product.icon className="h-12 w-12 text-bank-accent mb-4" />
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};