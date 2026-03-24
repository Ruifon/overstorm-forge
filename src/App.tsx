import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import Drops from "./pages/Drops";
import ProductPage from "./pages/ProductPage";
import Customize from "./pages/Customize";
import Brand from "./pages/Brand";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/overstorm-forge">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/colecoes" element={<Collections />} />
            <Route path="/colecoes/:gender" element={<Collections />} />
            <Route path="/drops" element={<Drops />} />
            <Route path="/drops/:section" element={<Drops />} />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/personalizar" element={<Customize />} />
            <Route path="/marca" element={<Brand />} />
            <Route path="/conta" element={<Account />} />
            <Route path="/conta/:section" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
