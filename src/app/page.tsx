import LikeButton from "./like-button";


function Header({title}: {title: string}) {
  return <h1>{title ? title : "Default title"}</h1>
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
  const s = "Title.";

  return (
    <div>
      <Header title="Title"></Header>

      <h2 className="text-3xl font-stretch-75% font-bold underline">
      Hello world!
      </h2>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />

      <button><a href="/test">test link</a></button>
    </div>
  )
}
