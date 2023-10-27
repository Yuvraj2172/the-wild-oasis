import GLobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GLobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pagenotfound" element={<PageNotFound />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        posotion="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          styles: {
            fontsize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
        reverseOrder={false}
      />
    </QueryClientProvider>
  );
};

export default App;
// 4&_7cWn_$YSn-Wr

// curl 'https://ezigozyahsylihhpewhy.supabase.co/rest/v1/cabins?select=*' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6aWdvenlhaHN5bGloaHBld2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMDg4NzcsImV4cCI6MjAxMzc4NDg3N30.gmAOtgb1jBji4V-8HQzQBKwf-tvLnOp3knHnD1M4r1k" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6aWdvenlhaHN5bGloaHBld2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMDg4NzcsImV4cCI6MjAxMzc4NDg3N30.gmAOtgb1jBji4V-8HQzQBKwf-tvLnOp3knHnD1M4r1k"
