import type { Metadata } from "next";
import { IntoTheQuietExperience } from "@/components/journey/into-the-quiet-experience";

export const metadata: Metadata = {
  title: "Into the Quiet",
  description:
    "A fictional journey through Mossveil Forest, Stillwater Mere, and Cloudrest Ridge.",
};

export default function IntoTheQuietPage() {
  return <IntoTheQuietExperience />;
}
