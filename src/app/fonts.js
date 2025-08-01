import { Caladea, Crimson_Text, Raleway } from "next/font/google";
import localFont from "next/font/local";

// Define the Google Font
// Here we're using Inter for our body text
export const crimson = Crimson_Text({
  // 1. Specify the weights you want to use
  weight: ["400", "600", "700"],

  // 2. Specify the styles you want
  style: ["normal", "italic"],

  // 3. Specify the character subsets you need
  subsets: ["latin"],

  // 4. (Recommended) Use 'swap' to avoid blocking text rendering
  display: "swap",

  // 5. (Crucial for easy use) Assign a CSS variable
  variable: "--font-crimson",
});

export const raleway = Raleway({
  // 1. Specify the weights you want to use
  weight: ["400", "600", "700"],

  // 2. Specify the styles you want
  style: ["normal", "italic"],

  // 3. Specify the character subsets you need
  subsets: ["latin"],

  // 4. (Recommended) Use 'swap' to avoid blocking text rendering
  display: "swap",

  // 5. (Crucial for easy use) Assign a CSS variable
  variable: "--font-raleway",
});

export const caladea = Caladea({
  // 1. Specify the weights you want to use
  weight: ["400", "700"],

  // 2. Specify the styles you want
  style: ["normal", "italic"],

  // 3. Specify the character subsets you need
  subsets: ["latin"],

  // 4. (Recommended) Use 'swap' to avoid blocking text rendering
  display: "swap",

  // 5. (Crucial for easy use) Assign a CSS variable
  variable: "--font-caladea",
});

const fonts = `${crimson.variable} ${raleway.variable} ${caladea.variable}`;

export default fonts;
