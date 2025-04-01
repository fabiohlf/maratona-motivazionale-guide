
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import GuidelinesPage from "./pages/GuidelinesPage";
import DailyPlanPage from "./pages/DailyPlanPage";
import TrackerPage from "./pages/TrackerPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          } />
          <Route path="/guidelines" element={
            <AppLayout>
              <GuidelinesPage />
            </AppLayout>
          } />
          <Route path="/daily-plan" element={
            <AppLayout>
              <DailyPlanPage />
            </AppLayout>
          } />
          <Route path="/tracker" element={
            <AppLayout>
              <TrackerPage />
            </AppLayout>
          } />
          <Route path="/resources" element={
            <AppLayout>
              <ResourcesPage />
            </AppLayout>
          } />
          <Route path="/profile" element={
            <AppLayout>
              <ProfilePage />
            </AppLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
