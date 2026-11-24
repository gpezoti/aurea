import { createFileRoute } from "@tanstack/react-router";
import WelcomeAurea from "@/components/WelcomeAurea";

const title = "Seja bem-vindo(a) à experiência Áurea Lentes Naturais";
const description =
  "Boas-vindas aos inscritos na imersão Áurea Lentes Naturais de facetas em resina com a Dra. Eveline Leite.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WelcomeAurea,
});
