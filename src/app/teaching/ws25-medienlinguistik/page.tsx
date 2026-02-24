import { TableRow } from "@/components/CourseOverview"

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
                <TableRow date="14.10.2025" topic="Einführung"/>
                <TableRow date="21.10.2025" topic="Modellierung"/>
                <TableRow date="28.10.2025" topic="Datenerhebung: Beobachtungen und Befragungen"/>
                <TableRow date="04.11.2025" topic="Datenerhebung: Experimente"/>
                <TableRow date="11.11.2025" topic="Korpuslinguistik"/>
                <TableRow date="25.11.2025" topic="Annotationen"/>
                <TableRow date="02.12.2025" topic="Textanalyse"/>
                <TableRow date="13.01.2026" topic="Sprachmodelle"/>
                <TableRow date="20.01.2026" topic="Offene Forschung"/>
                <TableRow date="27.01.2026" topic="Zusammenfassung & Klausurvorbereitung"/>
                <TableRow date="03.02.2026" topic="Klausur"/>
                </tbody>
            </table>
        </div>
    </div>
  )
}