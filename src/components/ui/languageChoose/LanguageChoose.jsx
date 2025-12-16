import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "@/components/ui/popover/Popover";
import { Icon } from "../icon/Icon";
import styles from './languageChoose.module.scss';
import { LANGUAGES } from "@/config/locales.config";
import { LANGUAGES_ICON } from "@/config/locales.config";

export function LanguageChoose() {

  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  return (

    <div className={styles.languageChooseWrapper}>
      <button
        className={styles.languageChoose}
        onClick={() => setOpen(open => !open)}
      >
        <Icon
          className={styles.languageChooseIcon}
          name={LANGUAGES_ICON[i18n.language]}
        />
      </button>
      <Popover open={open} onClose={() => setOpen(false)}>
        <ul className={styles.languageChoosePopover}>
          {LANGUAGES.map(lang => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  i18n.changeLanguage(lang.code)
                  setOpen(false)
                }}
              >
                <Icon
                  className={styles.languageChooseIcon}
                  name={lang.icon}
                />
                <span>
                  {t(lang.labelKey)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Popover>
    </div>

  )
}
