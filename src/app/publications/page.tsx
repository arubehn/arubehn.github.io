import fs from "fs"
import path from "path"


function parseBibtex(input: string): BibtexParseResult {
  var bibtexParse = require('@orcid/bibtex-parse-js');
  return bibtexParse.toJSON(input) as BibtexParseResult
}

type BibtexEntryTags = Record<string, string>

type BibtexEntry = {
  citationKey: string
  entryType: string
  entryTags: BibtexEntryTags
}

type BibtexParseResult = BibtexEntry[]

type BibliographyEntryProps = {
  entry: BibtexEntry
}

type BibliographyEntryTagsProps = {
  entryTags: BibtexEntryTags
}

function Header({title}: {title: string}) {
  return <h1>{title ? title : "Default title"}</h1>
}

function BoldedText({ text, shouldBeBold }: {text: string, shouldBeBold: string}) {
  const textArray = text.split(shouldBeBold);
  return (
    <span>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <b>{shouldBeBold}</b>
          )}
        </>
      ))}
    </span>
);
}

function BaseCitation( {title, authors, year}: {title: string, authors: string, year: string} ) {
  return <span><BoldedText text={authors} shouldBeBold="Rubehn, Arne"/> ({year}). <b>{title}</b>.</span>
}

function ArticleInfo( { entryTags }: BibliographyEntryTagsProps ) {
  return (
    <span>
      <i>{entryTags.journal}</i> {entryTags.volume}({entryTags.number}), {entryTags.pages}. {entryTags.publisher}, {entryTags.address}.
    </span>
  )
}

function Reference({ entry }: BibliographyEntryProps) {
  const entryType = entry.entryType;
  const entryTags = entry.entryTags;
  var authors = entryTags.author.replaceAll("and", "&");
  var year = entryTags.year;
  var title = entryTags.title;
  var bibString = " (" + year + "). " + title + ".";
  if (entry.entryType.toLowerCase() === "article") {
    return <p className="-indent-0"><BaseCitation title={title} authors={authors} year={year}/> <ArticleInfo entryTags={entryTags}/></p>
  } else {
    return <p className="-indent-0"><BoldedText text={authors} shouldBeBold="Rubehn, Arne"/><BoldedText text={bibString} shouldBeBold={title}/></p>
  }
}

function BibliographyEntry({ entry }: BibliographyEntryProps) {
  const linkFields = ["pdf", "poster"] as const;
  const externalLinkFields = ["code", "url"] as const;
  const entryType = entry.entryType;
  const entryTags = entry.entryTags;
  
  const fileLink = "assets/pdf/" + entryTags.pdf;
  return <div className="py-2">
    <Reference entry={entry}/>
    <div className="flex gap-2 mt-2">
      {linkFields.map((field) =>
          entryTags[field] ? (
            <a
              key={field}
              href={"/assets/pdf/" + entryTags[field]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent hover:bg-(--theme) text-(--theme) font-semibold hover:text-white py-1 px-2 border border-(--theme) hover:border-transparent rounded">
                {field.toUpperCase()}
              </button>
            </a>
          ) : null
        )}
        {externalLinkFields.map((field) =>
          entryTags[field] ? (
            <a
              key={field}
              href={entryTags[field]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent hover:bg-(--theme) text-(--theme) font-semibold hover:text-white py-1 px-2 border border-(--theme) hover:border-transparent rounded hover:cursor-pointer cursor-pointer">
                {field.toUpperCase()}
              </button>
            </a>
          ) : null
        )}
    </div>
  </div> 
}

export default function HomePage() {
  const filePath = path.join(process.cwd(), "public", "publications.bib");
  const s = fs.readFileSync(filePath, "utf-8");

  const parsed = parseBibtex(s);

  return (
    <div>
      <Header title="publications"></Header>
      <ul>
        {parsed.map((entry) => (
          <li key={entry.citationKey}><BibliographyEntry entry={entry}/></li>
        ))}
      </ul>
    </div>
  )
}
