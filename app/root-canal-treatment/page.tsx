import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { rootCanal } from "@/lib/services";

export const metadata: Metadata = {
  title: rootCanal.metaTitle,
  description: rootCanal.metaDescription,
  alternates: { canonical: `/${rootCanal.slug}/` },
  openGraph: {
    type: "website",
    url: `/${rootCanal.slug}/`,
    title: rootCanal.metaTitle,
    description: rootCanal.metaDescription,
    images: [{ url: rootCanal.heroImg }],
  },
};

export default function Page() {
  return <ServicePage data={rootCanal} />;
}
