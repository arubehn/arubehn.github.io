import { TalksBibliography } from "@/components/Bibliography";
import path from "path"


export default function HomePage() {
  const filePath = path.join(process.cwd(), "public", "talks.bib");

  return (
    <div>
      <h1>talks</h1>
      <article>
        <div className="w-full sm:w-md float-right p-4">
          <picture>
            <img src="/talk.jpg" className="img-fluid z-depth 1 rounded" width="100%" height="auto" alt="Arne Rubehn giving a talk in Paris."/>
          </picture>
        </div>
        <TalksBibliography filePath={filePath}></TalksBibliography>
      </article>
    </div>
  )
}
