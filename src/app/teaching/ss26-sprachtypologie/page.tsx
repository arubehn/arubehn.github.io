import { TableRow } from "@/components/CourseOverview"

function formatLink(fName: string) {
    const materialsDir = "/assets/pdf/ss26-sprachtypologie/";
    
    return materialsDir + fName;
}

export default function HomePage() {
  return (
    <div>
        <h1>Sprache und Kognition: Sprachtypologie und Universalien</h1>
        <h3>Hauptseminar | Universität Passau | Sommersemester 2026 </h3>

        <div className="relative overflow-x-auto bg-neutral-primary-soft rounded shadow-xs border mt-4">
            <table className="w-full text-left rtl:text-right text-body">
                <thead className="bg-neutral-secondary-soft border-b border-default">
                <tr>
                    <th scope="col" className="px-6 py-3">Datum</th>
                    <th scope="col" className="px-6 py-3">Thema</th>
                    <th scope="col" className="px-6 py-3">Materialien</th>
                </tr>
                </thead>
                <tbody>
                <TableRow date="14.04.2026" topic="Einführung" handoutLink={formatLink("01-einfuehrung-handout.pdf")} 
                    slidesLink={formatLink("01-einfuehrung-slides.pdf")}/>
                <TableRow date="21.04.2026" topic="Grundlagen der Linguistik" handoutLink={formatLink("02-linguistik-handout.pdf")} 
                    slidesLink={formatLink("02-linguistik-slides.pdf")}/>
                <TableRow date="28.04.2026" topic="Grundlagen der Typologie"/>
                <TableRow date="05.05.2026" topic="Phonologische Typologie"/>
                <TableRow date="12.05.2026" topic="Morphologische Typologie"/>
                <TableRow date="19.05.2026" topic="Syntaktische Typologie"/>
                <TableRow date="02.06.2026" topic="Lexikalische Typologie"/>
                <TableRow date="09.06.2026" topic="Numerus und Zahlensysteme"/>
                <TableRow date="16.06.2026" topic="Farbbenennung"/>
                <TableRow date="23.06.2026" topic="Lautsymbolismus"/>
                <TableRow date="30.06.2026" topic="--- t.b.a. ---"/>
                <TableRow date="07.07.2026" topic="--- t.b.a. ---"/>
                <TableRow date="14.07.2026" topic="Prüfungsvorbereitung"/>
                </tbody>
            </table>
        </div>
    </div>
  )
}