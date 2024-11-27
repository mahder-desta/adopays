import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ti: () => import("./dictionaries/ti.json").then((module) => module.default),
};

type DictionaryType = (typeof dictionaries)[keyof typeof dictionaries];
export const getDictionary = async (
  locale: keyof typeof dictionaries
): Promise<Awaited<ReturnType<DictionaryType>>> => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
