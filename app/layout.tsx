import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal title="hello world!" isOpen />
         */}
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
