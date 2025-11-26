import "./globals.css";
import { Header, Footer, Navigator } from "@/components/layouts/_index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        {/* Navigator */}
        <Navigator />

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 py-10">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
