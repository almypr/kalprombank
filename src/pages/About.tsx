import React from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-bank-primary mb-8 text-center">О Калпромбанке</h1>
      
      <Card className="max-w-3xl mx-auto p-8 animate-fadeIn">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-bank-primary mb-3">История банка</h2>
            <p className="text-bank-text text-lg leading-relaxed">
              Калпромбанк был основан в 2016 году предпринимателем Олегом Калковым. С момента основания 
              банк демонстрирует устойчивый рост и развитие, став одним из инновационных лидеров 
              банковского сектора.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-bank-primary mb-3">Наши достижения</h2>
            <p className="text-bank-text text-lg leading-relaxed">
              За годы работы Калпромбанк успешно внедрил передовые финансовые технологии, 
              создал широкую сеть обслуживания и завоевал доверие тысяч клиентов. Банк 
              постоянно развивает цифровые сервисы и предлагает инновационные финансовые решения.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;