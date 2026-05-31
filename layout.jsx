import './globals.css';

export const metadata = {
  title: 'GitHealth // Metric Telemetry Engine',
  description: 'Track repository vitality status',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

