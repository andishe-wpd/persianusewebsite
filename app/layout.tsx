import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { ThemeProviderProps } from "next-themes/dist/types";
const inter = Vazirmatn({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-orange-300`}>
        {/* sidebar */}
        {children}
      </body>
      {/* footer */}
    </html>
  );
}
