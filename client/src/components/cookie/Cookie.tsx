"use client"
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

interface SessionInfo {
  cc?: boolean;
  language?: string;
}

const Cookie: React.FC = () => {
  const [cookieAccepted, setCookieAccepted] = useState<boolean>(false);
  const [userLanguage, setUserLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sessionInfoCookie = Cookies.get("session_info");
    if (sessionInfoCookie) {
      const parsedSessionInfo: SessionInfo = JSON.parse(sessionInfoCookie);
      setCookieAccepted(parsedSessionInfo.cc === true);
      setUserLanguage(parsedSessionInfo.language);
    }
  }, []);

  const getTranslations = (language: string) => {
    // Se precisar adicionar mais idiomas, pode fazer isso diretamente aqui
    return language === 'pt-br'
      ? {
          title: "🍪 Tenha um Cookie.",
          message: "Nós utilizamos cookies para garantir que você tenha a melhor experiência em nosso site.",
          readPolicy: "Leia as políticas de cookies",
          managePreferences: "Gerencie suas preferências",
          ok: "Ok"
        }
      : {
          title: "🍪 Have a Cookie.",
          message: "We use cookies to ensure that we give you the best experience on our website.",
          readPolicy: "Read cookies policies",
          managePreferences: "Manage your preferences",
          ok: "Ok"
        };
  };

  const acceptCookies = () => {
    const existingSessionInfo = Cookies.get("session_info");
    let updatedSessionInfo: SessionInfo = existingSessionInfo
      ? JSON.parse(existingSessionInfo)
      : {};

    if (updatedSessionInfo.cc === undefined) {
      updatedSessionInfo.cc = undefined;
    }

    updatedSessionInfo.cc = true;
    updatedSessionInfo.language = userLanguage;

    Cookies.set("session_info", JSON.stringify(updatedSessionInfo), {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });

    setCookieAccepted(true);
  };

  const translations = getTranslations(userLanguage || navigator.language);

  return (
    <>
      {!cookieAccepted && (
        <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl z-10">
          <h2 className="font-semibold text-gray-800 dark:text-white">
            {translations.title}
          </h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {translations.message}{' '}
            <a href="#" className="text-blue-500 hover:underline">
              {translations.readPolicy}
            </a>
            .
          </p>

          <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
              {translations.managePreferences}
            </button>

            <button
              className="text-xs bg-zinc-800 font-medium rounded-lg hover:bg-zinc-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={acceptCookies}
            >
              {translations.ok}
            </button>
          </div>
        </section>
      )}
      {/* Restante do conteúdo da sua aplicação */}
    </>
  );
};

export default Cookie;
