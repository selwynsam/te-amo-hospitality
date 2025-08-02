import fonts from "./fonts";
import "./globals.css";

const info = {
  name: "Te Amo Hospitality",
  title: "Te Amo Hospitality - Comfort Meets Elegance",
  description:
    "Te Amo Hospitality - Experience seamlessly managed service apartments for your personalized stay.",
  url: "https://www.teamogoa.in",
};

export const metadata = {
  title: info.title,
  description: info.description,
  openGraph: {
    title: info.title,
    description: info.description,
    url: info.url,
    siteName: info.name,
    images: [
      {
        url: `${siteInfo.url}/hero.webp`,
        width: 1200,
        height: 630,
        alt: info.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    images: [`${siteInfo.url}/hero.webp`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="en" className={fonts}>
      <body>
        <div id="modal-root" />
        {children}
      </body>
    </html>
  );
}
