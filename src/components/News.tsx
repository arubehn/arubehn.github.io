import path from "path"
import fs from "fs"
import { SimpleAccordion } from "./Accordion"

type NewsPost = {
    date: string
    title: string
    text: string
    link?: string
}

export type NewsPostProps = {
    post: NewsPost
}

type NewsCollection = NewsPost[]

function loadNews() {
    const filePath = path.join(process.cwd(), "public", "news.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent) as NewsCollection;
}

export function NewsPage() {
    const posts = loadNews();

    return (<div>
        <ul>{
        posts.map((post) =>
            <li className="py-2" key={post.date}><SimpleAccordion post={post}/></li>
        )}</ul>
    </div>
    )
}

export function NewsSnippet() {
    const posts = loadNews().slice(0, 3);

    return (<div>
        <ul>{
        posts.map((post) =>
            <li className="py-2" key={post.date}><SimpleAccordion post={post}/></li>
        )}</ul>
    </div>
    )
}
