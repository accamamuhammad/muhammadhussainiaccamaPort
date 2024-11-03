import "./globals.css";

export const metadata = {
  title: "Accama Muhammad 2.0",
  description: "Pressure makes diamonds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light-mode overflow-x-hidden !scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
