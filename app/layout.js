import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rue Domestics | Trusted household staffing",
  description:
    "Rue Domestics connects you with vetted cleaning, domestic staff, and childcare professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body
        className={`${plusJakarta.className} flex min-h-full flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
