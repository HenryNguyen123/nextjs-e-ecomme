"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "./redux/stores/stores.redux";
import ToastifyComponent from "@/app/components/toast/toast.component";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        {children}
        <ToastifyComponent />
      </Provider>
    </ThemeProvider>
  );
}
