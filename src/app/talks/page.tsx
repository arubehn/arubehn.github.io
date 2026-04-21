import { TalksBibliography } from "@/components/Bibliography";
import path from "path"


export default function HomePage() {
  const filePath = path.join(process.cwd(), "public", "talks.bib");

  return (
    <div>
      <h1>talks</h1>
      <TalksBibliography filePath={filePath}></TalksBibliography>
    </div>
  )
}
