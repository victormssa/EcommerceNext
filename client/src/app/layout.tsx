"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Cookie from "@/components/cookie/Cookie";


interface SessionInfo {
  cc?: boolean;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookieAccepted, setCookieAccepted] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const sessionInfoCookie = Cookies.get("session_info");
    if (sessionInfoCookie) {
      const parsedSessionInfo: SessionInfo = JSON.parse(sessionInfoCookie);
      // Verificar se cc existe e é verdadeiro
      if (parsedSessionInfo.cc !== undefined && parsedSessionInfo.cc === true) {
        setCookieAccepted(true);
      } else {
        setCookieAccepted(false);
      }
    } else {
      setCookieAccepted(undefined);
    }
  }, []);

  if (cookieAccepted === false) {
    // Se cookieAccepted for falso, renderize o componente Cookie
    return (
      <html lang="eng">
        <body className={inter.className}>
          <Cookie />
          {children}
        </body>
      </html>
    );
  } else if (cookieAccepted === undefined) {
    // Se cookieAccepted for undefined, aguarde a autenticação antes de renderizar algo
    return (
      <html lang="eng">
        <body className={inter.className}>
          {/* Pode renderizar um indicador de carregamento ou outra lógica de espera */}
          {children}
        </body>
      </html>
    );
  } else if (cookieAccepted === true) {
    // Se cookieAccepted for verdadeiro, renderize children
    return (
      <html lang="eng">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
    }
}
