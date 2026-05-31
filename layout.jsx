import "./globals.css";

export const metadata = {
  title: "GitHealth // Neumorphic Tracker",
  description: "Accurate Open Source Project Health & Issue Tracker Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased select-none">{children}</body>
    </html>
  );
}