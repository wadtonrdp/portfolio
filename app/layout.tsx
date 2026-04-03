import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wadton.dev",
  description: "Portfólio de Wadton - Desenvolvedor Frontend",
  icons: {
    // O caminho começa com / porque ele aponta para a pasta public
    icon: "/favicon.svg", 
    // Você também pode adicionar o shortcut para o png como fallback
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }} // Dica: Adicione isso para o scroll suave nos seus links de âncora (#)
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#EEEDFE]">
        {children}
      </body>
    </html>
  );
}