import countries from "i18n-iso-countries";

import en from "i18n-iso-countries/langs/en.json";
import ko from "i18n-iso-countries/langs/ko.json";
import ja from "i18n-iso-countries/langs/ja.json";
import zh from "i18n-iso-countries/langs/zh.json";
import fr from "i18n-iso-countries/langs/fr.json";
import de from "i18n-iso-countries/langs/de.json";
import es from "i18n-iso-countries/langs/es.json";
import it from "i18n-iso-countries/langs/it.json";
import pt from "i18n-iso-countries/langs/pt.json";
import ru from "i18n-iso-countries/langs/ru.json";
import ar from "i18n-iso-countries/langs/ar.json";
import vi from "i18n-iso-countries/langs/vi.json";
import th from "i18n-iso-countries/langs/th.json";
import id from "i18n-iso-countries/langs/id.json";
import tr from "i18n-iso-countries/langs/tr.json";
import nl from "i18n-iso-countries/langs/nl.json";
import pl from "i18n-iso-countries/langs/pl.json";
import uk from "i18n-iso-countries/langs/uk.json";

export type CountryOption = { value: string; label: string };

const SUPPORTED = new Set<string>();
let registered = false;

// locale만 있으면 충분 (countries 값 타입이 locale별로 string|string[] 섞여서 엄격타입 금지)
type LocaleJson = { locale: string; countries: Record<string, any> };

function ensureRegistered() {
    if (registered) return;

    const locales: LocaleJson[] = [
        en as any,
        ko as any,
        ja as any,
        zh as any,
        fr as any,
        de as any,
        es as any,
        it as any,
        pt as any,
        ru as any,
        ar as any,
        vi as any,
        th as any,
        id as any,
        tr as any,
        nl as any,
        pl as any,
        uk as any,
    ];

    for (const localeJson of locales) {
        countries.registerLocale(localeJson as any);
        SUPPORTED.add(String(localeJson.locale).toLowerCase());
    }

    SUPPORTED.add("en");
    registered = true;
}

function normalizeLocale(appLang: string) {
    const raw = (appLang || "en").toLowerCase();
    return raw.split("-")[0] || "en"; // en-US -> en
}

export function getCountryOptions(appLanguage: string): CountryOption[] {
    ensureRegistered();

    const locale = normalizeLocale(appLanguage);
    const effectiveLocale = SUPPORTED.has(locale) ? locale : "en";

    const names = countries.getNames(effectiveLocale) || {};
    const safeNames =
        Object.keys(names).length > 0 ? names : countries.getNames("en") || {};

    return Object.entries(safeNames)
        .map(([code, name]) => ({ value: code, label: String(name) }))
        .sort((a, b) => a.label.localeCompare(b.label, effectiveLocale));
}
