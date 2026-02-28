import { NewsSnippet } from "@/components/News"
import { IconBar } from "@/components/Icons"

export default function HomePage() {

  return (
    <div>
      <h1 className="!text-4xl text-semibold">arne rubehn</h1>
      <h4 className="text-(--theme-secondary)">[ˈaʁnə ʁuˈbeːn]</h4>
      <article>
        <div className="w-full sm:w-xs float-right p-4">
          <picture>
            <img src="/me.jpg" className="img-fluid z-depth 1 rounded" width="100%" height="auto" alt="Picture of Arne"/>
          </picture>
        </div>
        <p>
          Hi! I am a computational linguist, currently pursuing my PhD at the Chair of Multilingual Computational Linguistics at the University of Passau. I focus on computer-assisted, data-driven methods for historical linguistics with the goal of advancing comparative historical linguistics by the means of intelligent algorithmic methods, alleviating researchers’ workload by processing large-scale data efficiently. I currently persue methods for modelling phonetic and semantic properties of basic vocabulary in an embedded space.
        </p>
        <p>
          I have studied Computational Linguistics, General Linguistics, and Latin at the University of Tübingen. Within my MA thesis project I have trained a neural network that estimates global probabilities for arbitrary sound changes. Additionally, I have years of working experience as a software developer for EtInEn (Etymological Inference Engine), a software for historical linguists that is being developed at the Linguistic Department in Tübingen.
        </p>
        <p>
          My research usually concerns the computational modelling of linguistic questions, especially within the domains of historical linguistics, phonetics and phonology, lexical semantics, and typology. Instead of focusing on individual languages or families, I aim at developing “generalist” models and methods in the light of large-scale, cross-linguistic applications. 
        </p>
      </article>
      <h1>latest news</h1>
      <NewsSnippet/>

      <IconBar className="h-20 text-primary hover:text-(--theme) transition-colors" />

    </div>
  )
}
