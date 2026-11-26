import { BrowserRouter, useLocation } from "react-router-dom";
import { DemoRoutes } from "./demo/routes";
import { ErrorRoutes } from "./errors/routes";
import { AppHeader } from "./demo/components/AppHeader";
import { AppFooter } from "./demo/components/AppFooter";
import { DemoWidget } from "./demo/components/DemoWidget";
import { MukToastContainer } from "./lib/components/feedback/MukToastContainer";
import {
  type BreadcrumbItem,
  MukBreadcrumbs,
} from "./lib/components/navigation/MukBreadcrumbs";
import { useMemo } from "react";

const ROUTE_TITLES: Record<string, string> = {
  "/demo": "Demo",
  "/demo/ui": "UI Kit",
  "/demo/ui/text": "Typography",
  "/demo/ui/buttons": "Buttons",
  "/demo/ui/icon-buttons": "Icon Buttons",
  "/demo/ui/form": "Form Elements",
  "/demo/ui/form/inputs": "Inputs",
  "/demo/ui/form/checkboxes": "Checkboxes",
  "/demo/ui/form/radio": "Radio",
  "/demo/ui/form/selects": "Selects",
  "/demo/ui/form/textareas": "Textareas",
  "/demo/ui/flow": "Component Flow",
  "/demo/ui/badge": "Badges",
  "/demo/ui/feedback": "Feedback",
  "/demo/ui/comments": "Comments",
  "/demo/ui/metrics": "Metric Card",
};
const BLANK_ROUTES = ["/401", "/404", "/500", "/403"];


function AppContent() {
  const { pathname } = useLocation();
  const isBlankLayout = BLANK_ROUTES.includes(pathname);

  const breadcrumbItems = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: "Home", to: "/" }];

    let currentPath = "";

    for (const segment of segments) {
      currentPath += `/${segment}`;
      if (ROUTE_TITLES[currentPath]) {
        items.push({ label: ROUTE_TITLES[currentPath], to: currentPath });
      }
    }
    return items;
  }, [pathname]);

  if (isBlankLayout){
    return(
      <div className="muk-wrapper">
        <div className="muk-content">
           <ErrorRoutes/>
            <MukToastContainer />
        </div>
      </div>
    )
  }

  return (
    <div className="muk-wrapper">
      <AppHeader />
      <main className="muk-content">
        <MukBreadcrumbs items={breadcrumbItems} />
        <DemoRoutes />
        <DemoWidget />
        <MukToastContainer />
      </main>
      <AppFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;
