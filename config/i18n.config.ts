export const locales = ["de"];
export type Locale = (typeof locales)[number];
import type { LocaleObject } from "vue-i18n-routing";

import type de from "@/messages/de/common.json";
import type projectDe from "@/messages/de/project.json";

import { project } from "../config/project.config";
export const defaultLocale: Locale = project.defaultLocale;

export const localesMap = {
	de: { code: "de", iso: "de", files: ["de/common.json", "de/project.json", "de/crm.json"] },
} satisfies Record<Locale, LocaleObject>;

export type Messages = typeof de & typeof projectDe;

export interface Schema {
	message: Messages;
}

export function isValidLocale(value: string): value is Locale {
	return value in locales;
}

export interface Translations extends Record<Locale, Messages> {
	de: typeof de & typeof projectDe;
}
