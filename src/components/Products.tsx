import { CreditCard, Landmark, PiggyBank, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "Дебетовые карты",
    description: "Бесплатное обслуживание и кэшбэк до 5%",
    icon: CreditCard,
  },
  {
    title: "Кредиты",
    description: "Низкие ставки от 5.9% годовых",
    icon: Landmark,
  },
  {
    title: "Вклады",
    description: "Высокий доход до 12% годовых",
    icon: PiggyBank,
  },
  {
    title: "Для бизнеса",
    description: "Расчетный счет и эквайринг",
    icon: Building,
  },
];

export const Products = () => {
  return (
    <section className="py-20 px-4 bg-bank-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bank-primary">
          Наши продукты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <product.icon className="h-12 w-12 text-bank-accent mb-4" />
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};