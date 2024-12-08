import { Shield, Clock, Award } from "lucide-react";

const features = [
  {
    title: "Надежность",
    description: "Входим в топ-100 надежных банков Арстотцки",
    icon: Shield,
  },
  {
    title: "Доступность",
    description: "Круглосуточная поддержка и онлайн-сервисы",
    icon: Clock,
  },
  {
    title: "Качество",
    description: "Лучший банк по версии клиентов 2023",
    icon: Award,
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bank-primary">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center space-y-4 animate-fadeIn"
            >
              <feature.icon className="h-16 w-16 mx-auto text-bank-accent" />
              <h3 className="text-xl font-semibold text-bank-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};