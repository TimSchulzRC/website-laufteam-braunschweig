import LogoContextProvider from "../components/LogoContext";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LogoContextProvider>
      <Navbar />
      {children}
    </LogoContextProvider>
  );
}
