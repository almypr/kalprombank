import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-bank-primary text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Калпромбанк - Ваш надежный финансовый партнер
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Современные банковские решения для частных лиц и бизнеса
            </p>
            <div className="flex gap-4">
              <Link to="/open-account">
                <Button size="lg" className="bg-bank-accent hover:bg-bank-accent/90">
                  Открыть счет
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/lovable-uploads/3cb5564d-5b87-4d30-bede-919d691c37d1.png"
              alt="Красная премиальная карта Калпромбанка"
              className="max-w-md w-full animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};