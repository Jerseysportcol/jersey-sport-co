export const metadata = {
  title: 'Jersey Sport Co',
  description: 'Personaliza tu jersey como quieras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
