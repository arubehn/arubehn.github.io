import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>teaching</h1>
      <p>All teaching materials are licensed under CC-BY-4.0. Feel free to reuse them, but please, credit me accordingly.</p>
      <h2 className="mt-2">summer 2026</h2>
      <ul className="ml-8">
        <li><b className="text-regular">Sprache und Kognition.</b> Hauptseminar, University of Passau.</li>
      </ul>
      <h2 className="mt-2">winter 2025/26</h2>
      <ul className="ml-8">
        <li><Link href="/teaching/ws25-medienlinguistik" className="font-semibold hover:underline text-(--theme)">Medienlinguistische Methodik.</Link> Wissenschaftliche Übung, University of Passau.</li>
      </ul>
      <h2 className="mt-2">summer 2025</h2>
      <ul className="ml-8">
        <li><Link href="/teaching/ss25-sprachvariation" className="font-semibold hover:underline text-(--theme)">Sprachvariation.</Link> Proseminar, University of Passau. <a href="https://arne.rubehn.com/assets/pdf/sprachvariation-handout.pdf"><button>HANDOUT</button></a></li>
      </ul>
    </div>
  )
}
