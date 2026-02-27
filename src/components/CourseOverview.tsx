export function TableRow({date, topic, slidesLink, handoutLink}: {date: string, topic: string, slidesLink?: string, handoutLink?: string}) {
    return <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <td className="px-6 py-3">{date} </td>
                    <td className="px-6 py-3">{topic}</td>
                    <td className="px-6 py-3">
                        {slidesLink && <a href={slidesLink}><button>SLIDES</button></a>} 
                        {handoutLink && <a href={handoutLink}><button>HANDOUT</button></a>}
                    </td>
            </tr>
}

