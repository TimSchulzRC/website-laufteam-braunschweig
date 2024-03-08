"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const LogoContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export default function LogoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [logoHidden, setLogoHidden] = useState(false);

  return (
    <LogoContext.Provider value={[logoHidden, setLogoHidden]}>
      {children}
    </LogoContext.Provider>
  );
}
