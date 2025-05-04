import "./style/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./component/navbar";
import Footer from "./component/footer";

export const metadata = {
  title: "SusterHomecare", // Ganti dengan judul website
  description: "Deskripsi Website", // Ganti dengan deskripsi website
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Metadata lainnya */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Pastikan icon sudah terpasang dengan benar */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
