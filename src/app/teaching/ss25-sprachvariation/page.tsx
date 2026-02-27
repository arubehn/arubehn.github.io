import { TableRow } from "@/components/CourseOverview"

function formatLink(fName: string) {
    const materialsDir = "/assets/pdf/ss25-sprachvariation/";
    
    return materialsDir + fName;
}

export default function HomePage() {
  return (
    <div>
        <h1>Sprachvariation</h1>
        <h3>Proseminar | Universität Passau | Sommersemester 2025 </h3>

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
                <TableRow date="23.04.2025" topic="Einführung" handoutLink={formatLink("01-einfuehrung-handout.pdf")} 
                    slidesLink={formatLink("01-einfuehrung-slides.pdf")}/>
                <TableRow date="30.04.2025" topic="Grundlagen der Linguistik" handoutLink={formatLink("02-linguistik-handout.pdf")} 
                    slidesLink={formatLink("02-linguistik-slides.pdf")}/>
                <TableRow date="14.05.2025" topic="Dialektologie I" handoutLink={formatLink("03-dialektologie1-handout.pdf")} 
                    slidesLink={formatLink("03-dialektologie1-slides.pdf")}/>
                <TableRow date="21.05.2025" topic="Dialektologie II" handoutLink={formatLink("04-dialektologie2-handout.pdf")} 
                    slidesLink={formatLink("04-dialektologie2-slides.pdf")}/>
                <TableRow date="28.05.2025" topic="Soziolinguistik I" handoutLink={formatLink("05_06-soziolinguistik-handout.pdf")} 
                    slidesLink={formatLink("05-soziolinguistik1-slides.pdf")}/>
                <TableRow date="04.06.2025" topic="Soziolinguistik II" handoutLink={formatLink("05_06-soziolinguistik-handout.pdf")} 
                    slidesLink={formatLink("06-soziolinguistik2-slides.pdf")}/>
                <TableRow date="11.06.2025" topic="Historische Linguistik I" handoutLink={formatLink("07_08-histling-handout.pdf")} 
                    slidesLink={formatLink("07-histling1-slides.pdf")}/>
                <TableRow date="18.06.2025" topic="Historische Linguistik II" handoutLink={formatLink("07_08-histling-handout.pdf")} 
                    slidesLink={formatLink("08-histling2-slides.pdf")}/>
                <TableRow date="25.06.2025" topic="Sprachtypologie I" handoutLink={formatLink("09-typologie1-handout.pdf")} 
                    slidesLink={formatLink("09-typologie1-slides.pdf")}/>
                <TableRow date="02.07.2025" topic="Sprachtypologie II" handoutLink={formatLink("10-typologie2-handout.pdf")} 
                    slidesLink={formatLink("10-typologie2-slides.pdf")}/>
                <TableRow date="09.07.2025" topic="Sprachevolution" handoutLink={formatLink("11-sprachevolution-handout.pdf")} 
                    slidesLink={formatLink("11-sprachevolution-slides.pdf")}/>
                <TableRow date="16.07.2025" topic="Zusammenfassung & Klausurvorbereitung"/>
                <TableRow date="23.07.2025" topic="Klausur"/>
                </tbody>
            </table>
        </div>
    </div>
  )
}