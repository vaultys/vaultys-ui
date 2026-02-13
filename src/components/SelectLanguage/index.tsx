const emojis = {
  ps: "🇵🇰",
  uz: "🇺🇿",
  tk: "🇹🇲",
  sq: "🇦🇱",
  ar: "🇦🇪",
  en: "🇬🇧",
  sm: "🇼🇸",
  ca: "🏴󠁥󠁳󠁣󠁴󠁿",
  pt: "🇵🇹",
  es: "🇪🇸",
  gn: "🇵🇾",
  hy: "🇦🇲",
  ru: "🇷🇺",
  nl: "🇳🇱",
  pa: "🇮🇳",
  de: "🇩🇪",
  az: "🇦🇿",
  bn: "🇧🇩",
  be: "🇧🇾",
  fr: "🇫🇷",
  dz: "🇧🇹",
  ay: "🇧🇴",
  qu: "🇧🇴",
  bs: "🇧🇦",
  hr: "🇭🇷",
  sr: "🇷🇸",
  tn: "🇹🇳",
  no: "🇧🇻",
  nb: "🇧🇻",
  nn: "🇧🇻",
  ms: "🇲🇾",
  bg: "🇧🇬",
  ff: "🇸🇳",
  rn: "🇧🇮",
  km: "🇰🇭",
  sg: "🇨🇫",
  zh: "🇨🇳",
  ln: "🇨🇩",
  kg: "🇨🇬",
  sw: "🇹🇿",
  lu: "🇨🇩",
  el: "🇬🇷",
  tr: "🇹🇷",
  cs: "🇨🇿",
  sk: "🇸🇰",
  da: "🇩🇰",
  ti: "🇪🇷",
  et: "🇪🇪",
  ss: "🇸🇿",
  am: "🇪🇹",
  fo: "🇫🇴",
  fj: "🇫🇯",
  hi: "🇮🇳",
  ur: "🇵🇰",
  fi: "🇫🇮",
  sv: "🇸🇪",
  ka: "🇬🇪",
  kl: "🇬🇱",
  ch: "🇬🇺",
  ht: "🇭🇹",
  it: "🇮🇹",
  la: "🇻🇦",
  hu: "🇭🇺",
  is: "🇮🇸",
  id: "🇮🇩",
  fa: "🇮🇷",
  ku: "🇮🇶",
  ga: "🇮🇪",
  gv: "🇮🇲",
  he: "🇮🇱",
  ja: "🇯🇵",
  kk: "🇰🇿",
  ko: "🇰🇷",
  ky: "🇰🇬",
  lo: "🇱🇦",
  lv: "🇱🇻",
  st: "🇱🇸",
  lt: "🇱🇹",
  lb: "🇱🇺",
  mg: "🇲🇬",
  ny: "🇲🇼",
  dv: "🇲🇻",
  mt: "🇲🇹",
  mh: "🇲🇭",
  ro: "🇲🇩",
  mn: "🇲🇳",
  my: "🇲🇲",
  af: "🇳🇦",
  na: "🇳🇷",
  ne: "🇳🇵",
  mi: "🇳🇿",
  mk: "🇲🇰",
  pl: "🇵🇱",
  rw: "🇷🇼",
  ta: "🇮🇳",
  sl: "🇸🇮",
  so: "🇸🇴",
  nr: "🇿🇦",
  ts: "🇿🇦",
  ve: "🇿🇦",
  xh: "🇿🇦",
  zu: "🇿🇦",
  eu: "🇪🇸",
  gl: "🇪🇸",
  oc: "🇪🇸",
  si: "🇱🇰",
  tg: "🇹🇯",
  th: "🇹🇭",
  to: "🇹🇴",
  uk: "🇺🇦",
  bi: "🇻🇺",
  vi: "🇻🇳",
  sn: "🇿🇼",
  nd: "🇿🇦",
};

export interface SelectLanguageProps {
  languages: string[];
  onLanguageClicked: (language: string) => void;
  currentValue: string;
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({ languages, onLanguageClicked, currentValue, size = "3xl" }) => {
  const Flag = ({ lc, emoji }) => (
    <div
      className={`${size === "sm" && "text-sm"} ${size === "md" && "text-md"} ${size === "lg" && "text-lg"} ${size === "xl" && "text-xl"} ${size === "2xl" && "text-2xl"} ${size === "3xl" && "text-3xl"} ${size === "4xl" && "text-4xl"} ${size === "5xl" && "text-5xl"} cursor-pointer px-1 ${currentValue == lc ? "" : "opacity-20"}`}
      onClick={() => onLanguageClicked(lc)}
      data-testid={lc}
    >
      {emoji}
    </div>
  );
  return (
    <div className="flex flex-row gap-1">
      {languages.map((language) => (
        <Flag lc={language} emoji={emojis[language]} />
      ))}
    </div>
  );
};
