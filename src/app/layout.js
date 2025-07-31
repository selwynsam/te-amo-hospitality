import fonts from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Te Amo Hospitality - Comfort Meets Elegance",
  description:
    "Te Amo Hospitality - Experience seamlessly managed service apartments for your personalized stay.",
};

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
