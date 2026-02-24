import { TableRow } from "@/components/CourseOverview"

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
                <TableRow date="23.04.2025" topic="Einführung"/>
                <TableRow date="30.04.2025" topic="Grundlagen der Linguistik"/>
                <TableRow date="14.05.2025" topic="Dialektologie I"/>
                <TableRow date="21.05.2025" topic="Dialektologie II"/>
                <TableRow date="28.05.2025" topic="Soziolinguistik I"/>
                <TableRow date="04.06.2025" topic="Soziolinguistik II"/>
                <TableRow date="11.06.2025" topic="Historische Linguistik I"/>
                <TableRow date="18.06.2025" topic="Historische Linguistik II"/>
                <TableRow date="25.06.2025" topic="Sprachtypologie I"/>
                <TableRow date="02.07.2025" topic="Sprachtypologie II"/>
                <TableRow date="09.07.2025" topic="Sprachevolution"/>
                <TableRow date="16.07.2025" topic="Zusammenfassung & Klausurvorbereitung"/>
                <TableRow date="23.07.2025" topic="Klausur"/>
                </tbody>
            </table>
        </div>
    </div>
  )
}