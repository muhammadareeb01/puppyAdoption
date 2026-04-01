import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puppy Haven – Premium Puppy Care, Grooming & Training",
  description: "Puppy Haven provides expert puppy care, grooming, training, healthy meal plans, and adoption support. Bringing happiness, one puppy at a time.",
  keywords: "puppy care, dog grooming, puppy training, dog adoption, pet care services",
  openGraph: {
    title: "Puppy Haven – Bringing Happiness, One Puppy at a Time",
    description: "Premium puppy care, grooming, training, and adoption support for furry friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
