/* eslint-disable @typescript-eslint/no-require-imports */

export const dynamic = "force-static"

import fs from "fs";

function parseBibtex(input: string): BibtexParseResult {
  const bibtexParse = require('@orcid/bibtex-parse-js');
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

function BoldedText({ text, shouldBeBold }: {text: string, shouldBeBold: string}) {
  const textArray = text.split(shouldBeBold);
  return (
    <span>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <span className="font-semibold">{shouldBeBold}</span>
          )}
        </>
      ))}
    </span>
);
}

function Title({ text }: {text: string}) {
    return <span className="font-semibold">{text}</span>
}

function BaseCitation( {title, authors, year}: {title: string, authors: string, year: string} ) {
  return <span><BoldedText text={authors} shouldBeBold="Rubehn, Arne"/> ({year}). <Title text={title}/>.</span>
}

function ArticleInfo( { entryTags }: BibliographyEntryTagsProps ) {
  const {
    journal,
    volume,
    number,
    pages,
    publisher,
    address,
    note
  } = entryTags

  return (
    <span>
      {journal && <i>{journal}</i>}
      {volume ? ` ${volume}`: ""}
      {number ? `(${number})` : ""}
      {pages ? `, ${pages}` : ""}
      {(publisher || address) && ". "}
      {publisher ? `${publisher}` : ""}
      {address ? `, ${address}` : ""}.
      {note ? ` ${note}`: ""}
    </span>
  )
}

function InProceedingsInfo ( { entryTags }: BibliographyEntryTagsProps ) {
  const {
    booktitle,
    pages,
    publisher,
    address,
    note
  } = entryTags

  return (
    <span>
      In <i>{booktitle}</i>
      {pages ? `, ${pages}` : ""}
      {(publisher || address) && ". "}
      {publisher ? `${publisher}` : ""}
      {address ? `, ${address}` : ""}.
      {note ? ` ${note}`: ""}
    </span>
  )
}

function ThesisInfo( { entryTags }: BibliographyEntryTagsProps ) {
    const {
    school,
    degree,
    subject,
    supervisor,
    note
  } = entryTags

  return (
    <span>
        {degree} thesis in {subject}, {school}, supervised by {supervisor}.
        {note ? ` ${note}`: ""}
    </span>
  )
}

function TalkInfo ( { entryTags }: BibliographyEntryTagsProps ) {
  const {
    date,
    venue,
    location,
    note
  } = entryTags

  return (
    <span>
      <i>{venue}</i>
      {location ? `, ${location}` : ""}
      {date ? `, ${date}` : ""}
      .
      {note ? ` ${note}`: ""}
    </span>
  )
}

function Reference({ entry }: BibliographyEntryProps) {
  const entryType = entry.entryType;
  const entryTags = entry.entryTags;
  const authors = entryTags.author.replaceAll("and", "&");
  const year = entryTags.year;
  const title = entryTags.title;
  if (entryType.toLowerCase() === "article") {
    return <span><BaseCitation title={title} authors={authors} year={year}/> <ArticleInfo entryTags={entryTags}/></span>
  } else if (entryType.toLowerCase() === "inproceedings") {
    return <span><BaseCitation title={title} authors={authors} year={year}/> <InProceedingsInfo entryTags={entryTags}/></span>
  } else if (entryType.toLowerCase() === "talk") {
    return <span><BaseCitation title={title} authors={authors} year={year}/> <TalkInfo entryTags={entryTags}/></span>
  } else if (entryType.toLowerCase() == "thesis" || entryType.toLowerCase() == "mastersthesis") {
    return <span><BaseCitation title={title} authors={authors} year={year}/> <ThesisInfo entryTags={entryTags}/></span>
  }
  
  return <span><BaseCitation title={title} authors={authors} year={year}/></span>
}

function BibliographyEntry({ entry }: BibliographyEntryProps) {
  const linkFields = ["pdf", "poster"] as const;
  const externalLinkFields = ["code", "url", "doi"] as const;
  const entryType = entry.entryType;
  const entryTags = entry.entryTags;
  
  const fileLink = "assets/pdf/" + entryTags.pdf;
  return <div className="py-3">
    <Reference entry={entry}/>
    <div className="flex gap-2 mt-1">
      {linkFields.map((field) =>
          entryTags[field] ? (
            <a
              key={field}
              href={"/assets/pdf/" + entryTags[field]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
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
              <button>
                {field.toUpperCase()}
              </button>
            </a>
          ) : null
        )}
    </div>
  </div> 
}

export function Bibliography({ filePath }: {filePath: string}) {
    const s = fs.readFileSync(filePath, "utf-8");
    const parsed = parseBibtex(s);

    return (
        <ul>
        {parsed.map((entry) => (
          <li key={entry.citationKey}><BibliographyEntry entry={entry}/></li>
        ))}
      </ul>
    )
}
