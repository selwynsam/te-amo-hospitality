import "./styles/main.css";
import "./globals.css";

export const metadata = {
  title: "Te Amo Hospitality - Comfort Meets Elegance",
  description:
    "Te Amo Hospitality - Experience seamlessly managed service apartments for your personalized stay.",
};

export default function RootLayout({ children }) {
  return (
    <html
      dir="ltr"
      lang="en"
      className="home_page home_page_design s_layout21 isFreePackage"
    >
      <body>{children}</body>
    </html>
  );
}
