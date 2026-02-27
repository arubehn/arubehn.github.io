type TableContents = {
  [key: string]: string
}
type TableContentsProp = {
  tableContents: TableContents
}


function CVTable({tableContents}: TableContentsProp) {
    return (
        <div className="overflow-x-auto border-0 bg-neutral-primary-soft mt-2 mb-4">
            <table className="table-fixed w-full text-left rtl:text-right text-body">
                <colgroup>
                    <col className="w-1/4" />
                    <col className="w-3/4" />
                </colgroup>
                <tbody>
                    {Object.entries(tableContents).map(([key, value]) => (
                    <tr key={key} className="">
                        <td className="px-4 py-2 font-semibold">
                        {key}
                        </td>
                        <td className="px-4 py-2">
                        {value}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default function HomePage() {
    const education = {
        "since 2023": "PhD Student, Chair for Multilingual Computational Linguistics, University of Passau.",
        "2019-2023": "Master of Arts, Computational Linguistics, University of Tübingen.",
        "03-07/2018": "Abroad studies (ERASMUS+), Applied Linguistics, Universitat Pompeu Fabra, Barcelona.",
        "2015-2019": "Bachelor of Arts, General Linguistics and Latin, University of Tübingen."
    }

    const professionalExperience = {
        "10/2023-present": "Researcher (wissenschaftlicher Mitarbeiter), Chair for Multilingual Computational Linguistics, University of Passau.",
        "12/2024-present": "Freelancer offering diverse services related to computational linguistics, including software development, data annotation, and consulting.",
        "12/2019-09/2023": "Research Assistant (wissenschaftliche Hilfskraft), Department of Linguistics, University of Tübingen.",
        "10/2021-03/2022": "AI Researcher (working student), Mercedes-Benz AG. Böblingen, Germany.",
        "12/2015-11/2019": "Various student jobs at ad agents GmbH, Dolce Vita, and Lofec GmbH."
    }

    const voluntaryWork = {
        "2014-present": "Soccer referee.",
        "2020-2023": "Student council (“Fachschaft”) member for General and Computational Linguistics, University of Tübingen.",
        "2015-2023": "Active member of a self-organized, charitable theater group."
    }

    return <div>
        <h1>cv</h1>
        <h2>education</h2>
        <CVTable tableContents={education}/>
        <h2>professional experience</h2>
        <CVTable tableContents={professionalExperience}/>
        <h2>voluntary work</h2>
        <CVTable tableContents={voluntaryWork}/>
    </div>
}
