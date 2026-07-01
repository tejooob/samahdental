import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { implants } from "@/lib/services";

export const metadata: Metadata = {
  title: implants.metaTitle,
  description: implants.metaDescription,
  alternates: { canonical: `/${implants.slug}/` },
  openGraph: {
    type: "website",
    url: `/${implants.slug}/`,
    title: implants.metaTitle,
    description: implants.metaDescription,
    images: [{ url: implants.heroImg }],
  },
};

export default function Page() {
  return <ServicePage data={implants} />;
}
