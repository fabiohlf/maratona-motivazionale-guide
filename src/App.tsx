
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import GuidelinesPage from "./pages/GuidelinesPage";
import DailyPlanPage from "./pages/DailyPlanPage";
import TrackerPage from "./pages/TrackerPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <AppLayout>
                  <HomePage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/guidelines" element={
              <ProtectedRoute>
                <AppLayout>
                  <GuidelinesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/daily-plan" element={
              <ProtectedRoute>
                <AppLayout>
                  <DailyPlanPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/tracker" element={
              <ProtectedRoute>
                <AppLayout>
                  <TrackerPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/resources" element={
              <ProtectedRoute>
                <AppLayout>
                  <ResourcesPage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <AppLayout>
                  <ProfilePage />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
