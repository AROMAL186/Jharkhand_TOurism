export default function GovDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
