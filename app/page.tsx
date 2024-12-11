import { redirect } from "next/navigation";

import type { Locale } from "@/types";

const defaultLocale: Locale = "en";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
