// components/Language.tsx
"use client"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Language: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  
  useEffect(() => {
    // Verificar se o cookie session_info existe
    const sessionInfoCookie = Cookies.get("session_info");

    if (!sessionInfoCookie) {
      // Se não existir, criar o cookie com cc sendo undefined
      const initialSessionInfo = { cc: undefined };
      Cookies.set("session_info", JSON.stringify(initialSessionInfo), {
        expires: 365, // ou qualquer outro período desejado
        secure: true,
        sameSite: "strict",
      });
    }
  }, []);

  useEffect(() => {
    // Verificar se o cookie existe
    const userPreferencesCookie = Cookies.get("session_info");

    if (userPreferencesCookie) {
        
      try {
        const preferences = JSON.parse(userPreferencesCookie);
        // Verificar se a linguagem está definida e 'active' é verdadeiro
        if (preferences.language && preferences.active) {
          // Redirecionar para a rota com base na linguagem no cookie
          setLoading(true)
          router.push(`/${preferences.language}`);
        } else if (preferences.language) {
          // Se apenas a linguagem estiver definida, definir no estado local
          setSelectedLanguage(preferences.language);
        }
      } catch (error) {
        console.error("Error parsing user preferences:", error);
      }
    }

    // Atualizar o estado de loading para indicar que a verificação foi concluída
  }, [router]);

  const handleLanguageChange = (language: string) => {
    // Obter o cookie existente ou inicializar um objeto vazio
    const existingSessionInfo = Cookies.get("session_info");
    const userPreferences = existingSessionInfo
      ? JSON.parse(existingSessionInfo)
      : {};
  
    // Atualizar as preferências com a nova linguagem
    userPreferences.language = language;
  
    // Atualizar o cookie session_info
    Cookies.set("session_info", JSON.stringify(userPreferences), {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });
  
    // Atualizar o estado local
    setSelectedLanguage(language);
  };

  const handleNextButtonClick = () => {
    // Redirecionar para a rota com base na linguagem selecionada
    if (selectedLanguage) {
      router.push(`/${selectedLanguage}`);

      // Atualizar o cookie session_info com o valor 'active: true'
      const userPreferences = {
        ...JSON.parse(Cookies.get("session_info") || "{}"),
        active: true,
      };

      Cookies.set("session_info", JSON.stringify(userPreferences), {
        expires: 365,
        secure: true,
        sameSite: "strict",
      });
    }
  };

  // Renderizar o componente principal apenas se não estiver carregando
  return (
    <div className="flex flex-col items-center space-x-4">
      {loading ? (
        <div className="flex gap-4 text-3xl font-semibold">
          <AiOutlineLoading3Quarters className="animate-spin"/>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <label htmlFor="language" className="text-lg font-medium mb-1">
            Please, select your desired language.
          </label>
          <span className="text-md font-medium mb-5">
            ご希望の言語を選択してください。
          </span>
          <select
            id="language"
            className="p-2 border rounded cursor-pointer"
            value={selectedLanguage || ""}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
          <option>Select</option>
            <option value="eng">English (Eng)</option>
            <option value="pt-br">Português Brasileiro (PT-BR)</option>
            {/* Adicione mais opções de idioma conforme necessário */}
          </select>
          <button
            onClick={handleNextButtonClick}
            className="flex items-center bg-zinc-900 hover:bg-zinc-800 text-white mt-10 px-4 py-2 rounded-xl gap-2"
          >
            Next{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Language;
