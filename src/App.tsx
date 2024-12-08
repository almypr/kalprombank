import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import OpenAccount from "./pages/OpenAccount";
import Information from "./pages/Information";
import News from "./pages/News";
import Career from "./pages/Career";
import Requisites from "./pages/Requisites";
import Terms from "./pages/Terms";
import Tariffs from "./pages/Tariffs";
import Disclosure from "./pages/Disclosure";
import Security from "./pages/Security";
import CardK from "./pages/cards/CardK";
import CardP from "./pages/cards/CardP";
import CardD from "./pages/cards/CardD";
import CardB from "./pages/cards/CardB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/information" element={<Information />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/requisites" element={<Requisites />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cards/k" element={<CardK />} />
          <Route path="/cards/p" element={<CardP />} />
          <Route path="/cards/d" element={<CardD />} />
          <Route path="/cards/b" element={<CardB />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;