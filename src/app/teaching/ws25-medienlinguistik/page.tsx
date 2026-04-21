import { TableRow } from "@/components/CourseOverview"

function formatLink(fName: string) {
    const materialsDir = "/assets/pdf/ws25-medienlinguistik/";
    
    return materialsDir + fName;
}

export default function HomePage() {
  return (
    <div>
        <h1>Medienlinguistische Methodik</h1>
        <h3>Wissenschaftliche Übung | Universität Passau | Wintersemester 2025/26 </h3>

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
                <TableRow date="14.10.2025" topic="Einführung" handoutLink={formatLink("01-einfuehrung-handout.pdf")} 
                    slidesLink={formatLink("01-einfuehrung-slides.pdf")}/>
                <TableRow date="21.10.2025" topic="Modellierung" handoutLink={formatLink("02-modellierung-handout.pdf")} 
                    slidesLink={formatLink("02-modellierung-slides.pdf")}/>
                <TableRow date="28.10.2025" topic="Datenerhebung: Beobachtungen und Befragungen" handoutLink={formatLink("03-datenerhebung-handout.pdf")} 
                    slidesLink={formatLink("03-datenerhebung-slides.pdf")}/>
                <TableRow date="04.11.2025" topic="Datenerhebung: Experimente" handoutLink={formatLink("04-experimente-handout.pdf")} 
                    slidesLink={formatLink("04-experimente-slides.pdf")}/>
                <TableRow date="11.11.2025" topic="Korpuslinguistik" handoutLink={formatLink("05-korpuslinguistik-handout.pdf")} 
                    slidesLink={formatLink("05-korpuslinguistik-slides.pdf")}/>
                <TableRow date="25.11.2025" topic="Annotationen" handoutLink={formatLink("06-annotation-handout.pdf")} 
                    slidesLink={formatLink("06-annotation-slides.pdf")}/>
                <TableRow date="02.12.2025" topic="Textanalyse" handoutLink={formatLink("07-textanalyse-handout.pdf")} 
                    slidesLink={formatLink("07-textanalyse-slides.pdf")}/>
                <TableRow date="13.01.2026" topic="Sprachmodelle" handoutLink={formatLink("08-sprachmodelle-handout.pdf")} 
                    slidesLink={formatLink("08-sprachmodelle-slides.pdf")}/>
                <TableRow date="20.01.2026" topic="Offene Forschung" handoutLink={formatLink("09-offene_forschung-handout.pdf")} 
                    slidesLink={formatLink("09-offene_forschung-slides.pdf")}/>
                <TableRow date="27.01.2026" topic="Zusammenfassung & Klausurvorbereitung"/>
                <TableRow date="03.02.2026" topic="Klausur"/>
                </tbody>
            </table>
        </div>
    </div>
  )
}