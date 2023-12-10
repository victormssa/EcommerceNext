'use client';
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

interface SessionInfo {
  cc?: boolean;
}

const Cookie: React.FC = () => {
  const [cookieAccepted, setCookieAccepted] = useState<boolean>(false);

  useEffect(() => {
    const sessionInfoCookie = Cookies.get("session_info");
    if (sessionInfoCookie) {
      const parsedSessionInfo: SessionInfo = JSON.parse(sessionInfoCookie);
      setCookieAccepted(parsedSessionInfo.cc === true);
    }
  }, []);

  const acceptCookies = () => {
    const existingSessionInfo = Cookies.get("session_info");
    const updatedSessionInfo: SessionInfo = existingSessionInfo
      ? JSON.parse(existingSessionInfo)
      : {};

    // Atualizar as preferências com a informação sobre cookies aceitos
    updatedSessionInfo.cc = true;

    Cookies.set("session_info", JSON.stringify(updatedSessionInfo), {
      expires: 365, // ou qualquer outro período desejado
      secure: true,
      sameSite: "strict",
    });

    // Atualizar o estado local
    setCookieAccepted(true);
  };

  return (
    <>
      {!cookieAccepted && (
        <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl z-10">
          <h2 className="font-semibold text-gray-800 dark:text-white">
            🍪 Have a Cookie.
          </h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            We use cookies to ensure that we give you the best experience on our
            website.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Read cookies policies
            </a>
            .{" "}
          </p>

          <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
              Manage your preferences
            </button>

            <button
              className="text-xs bg-zinc-800 font-medium rounded-lg hover:bg-zinc-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={acceptCookies}
            >
              Ok
            </button>
          </div>
        </section>
      )}
      {/* Restante do conteúdo da sua aplicação */}
    </>
  );
};

export default Cookie;
