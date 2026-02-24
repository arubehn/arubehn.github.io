export function TableRow({date, topic}: {date: string, topic: string}) {
    return <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">{date} </td>
                    <td className="px-6 py-3">{topic}</td>
                    <td className="px-6 py-3"><button>SLIDES</button> <button>HANDOUT</button></td>
            </tr>
}

