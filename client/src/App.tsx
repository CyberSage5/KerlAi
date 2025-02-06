import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Status from "@/pages/status";
import Changelog from "@/pages/changelog";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import Documentation from "@/pages/documentation";
import DashboardLayout from "@/layouts/dashboard-layout";
import RepositoryDetails from "@/pages/dashboard/repository";
import CodeReviews from "./pages/dashboard/reviews";
import APIDocs from "./pages/dashboard/docs";
import Team from "./pages/dashboard/team";
import { AnalyticsDashboard } from "./components/dashboard/analytics";
import SettingsPage from "./pages/dashboard/settings";

function DashboardRoute({ component: Component }: { component: React.ComponentType }) {
  return (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={() => <DashboardRoute component={Dashboard} />} />
      <Route path="/dashboard/repository" component={() => <DashboardRoute component={RepositoryDetails} />} />
      <Route path="/dashboard/reviews" component={() => <DashboardRoute component={CodeReviews} />} />
      <Route path="/dashboard/docs" component={() => <DashboardRoute component={APIDocs} />} />
      <Route path="/dashboard/team" component={() => <DashboardRoute component={Team} />} />
      <Route path="/dashboard/analytics" component={() => <DashboardRoute component={AnalyticsDashboard} />} />
      <Route path="/dashboard/settings" component={() => <DashboardRoute component={SettingsPage} />} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/status" component={Status} />
      <Route path="/changelog" component={Changelog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header /> {/* Assuming a Header component exists */}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

// Placeholder components - replace with your actual implementations
function Header() {
  return (
    <header>
      <h1>Kerl</h1>
    </header>
  );
}


export default App;