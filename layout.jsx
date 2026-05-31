export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>GitHealth // Telemetry Vibe</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
