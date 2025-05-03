import "./style/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./component/navbar";
import Footer from "./component/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head/>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
