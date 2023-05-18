import { useContext, createContext, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { API_ENDPOINT } from "./utils/constants";

interface IChildrenProp {
  children: React.ReactNode;
}

interface IContextType {
  isLoading: boolean;
  isError: {
    show: boolean;
    msg: string;
  };
  definition: ISingleDef[] | undefined;
  isDarkTheme: boolean;
  fontFamily: string;
  toggleTheme: () => void;
  setFont: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  fetchDefinition: (value: string) => void;
}

interface IPhonetic {
  audio?: string;
  sourceUri?: string;
  text?: string;
  license?: {
    name: string;
    uri: string;
  };
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
  sourceUrls: string;
}

export interface ISingleDef {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

const DictionaryContext = createContext<IContextType>({
  isLoading: false,
  isError: {
    show: false,
    msg: "",
  },
  definition: undefined,
  isDarkTheme: false,
  fontFamily: "space-grotesk",
  toggleTheme: () => {},
  setFont: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  fetchDefinition: (val) => {},
});

export const AppProvider = ({ children }: IChildrenProp) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });
  const [definition, setDefinition] = useState<ISingleDef[] | undefined>();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [fontFamily, setFontFamily] = useState("space-grotesk");

  const fetchDefinition = async (value: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios(`${API_ENDPOINT}/${value}`);
      console.log(data);
      const newObject = {};
      setDefinition(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        // THROW ERROR
      } else {
        throw new Error("something went wrong");
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDefinition("hello");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
  };

  const setFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  return (
    <DictionaryContext.Provider
      value={{
        isLoading,
        definition,
        isDarkTheme,
        fontFamily,
        isError,
        toggleTheme,
        setFont,
        fetchDefinition,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryApp = () => useContext(DictionaryContext);
