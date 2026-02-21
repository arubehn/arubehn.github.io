import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>teaching</h1>
      <h2 className="ml-4 mt-2">summer 2026</h2>
      <ul className="ml-8">
        <li><b className="text-regular">Sprache und Kognition.</b> Hauptseminar, University of Passau.</li>
      </ul>
      <h2 className="ml-4 mt-2">winter 2025/26</h2>
      <ul className="ml-8">
        <li><b>Medienlinguistische Methodik.</b> Wissenschaftliche Übung, University of Passau.</li>
      </ul>
      <h2 className="ml-4 mt-2">summer 2025</h2>
      <ul className="ml-8">
        <li><Link href="/teaching/ss25-sprachvariation" className="font-semibold hover:underline text-(--theme)">Sprachvariation.</Link> Proseminar, University of Passau. <a href="https://arne.rubehn.com/assets/pdf/sprachvariation-handout.pdf"><button>HANDOUT</button></a></li>
      </ul>
    </div>
  )
}
