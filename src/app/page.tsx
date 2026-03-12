import { HeroHome } from "@/components/sections/HeroHome";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ForWho } from "@/components/sections/ForWho";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Problems } from "@/components/sections/Problems";
import { Method } from "@/components/sections/Method";
import { Comparison } from "@/components/sections/Comparison";
import { SocialProof } from "@/components/sections/SocialProof";
import { ApplySection } from "@/components/sections/ApplySection";
import { HomeFAQ } from "@/components/sections/HomeFAQ";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ClientLogos />
      <ForWho />
      <ServiceGrid />
      <Problems />
      <Method />
      <Comparison />
      <SocialProof />
      <ApplySection />
      <HomeFAQ />
    </>
  );
}
