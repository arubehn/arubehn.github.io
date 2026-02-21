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
                    <th>Thema</th>
                    <th>Materialien</th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">23.04.2025</td>
                    <td>Einführung</td>
                    <td><button>SLIDES</button> <button>HANDOUT</button></td>
                </tr>
                <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">30.04.2025 </td>
                    <td>Grundlagen der Linguistik</td>
                    <td><button>SLIDES</button> <button>HANDOUT</button></td>
                </tr>
                <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">14.05.2025 </td>
                    <td>Dialektologie I</td>
                    <td><button>SLIDES</button> <button>HANDOUT</button></td>
                </tr>
                <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">21.05.2025 </td>
                    <td>Dialektologie II</td>
                    <td><button>SLIDES</button> <button>HANDOUT</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}