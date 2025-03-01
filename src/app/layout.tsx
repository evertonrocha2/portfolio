import MouseMoveEffect from "../../components/MouseMoveEffect";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
