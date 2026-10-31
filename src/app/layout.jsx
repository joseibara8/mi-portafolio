import "./globals.css";

export const metadata = {
  title: "Jose Ibarra | Desarrollador Full Stack",
  description:
    "Portafolio de Jose Benjamín Ibarra Sánchez, desarrollador Full Stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}