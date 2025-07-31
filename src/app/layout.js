import fonts from "./fonts";
import "./globals.css";
import "./styles/main.css";

export const metadata = {
  title: "Te Amo Hospitality - Comfort Meets Elegance",
  description:
    "Te Amo Hospitality - Experience seamlessly managed service apartments for your personalized stay.",
};

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="en" className={fonts}>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body>{children}</body>
    </html>
  );
}
