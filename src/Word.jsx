function Word({ word, handleTitleClick }) {
  return (
    <div className="word">
      <h1
        onClick={() => handleTitleClick(word.title)}
        style={{ cursor: "pointer" }}
      >
        {word.title}
      </h1>
      <h3>{word.definition}</h3>
      {word.example.map((example, i) => {
        const [speaker, dialogue] = example.split(":");
        return (
          <i key={i}>
            <p>
              {speaker}: "{dialogue.trim()}"
            </p>
          </i>
        );
      })}
      <p className="credits">
        viết bởi {word.author}{" "}
        <b>{new Date(word.date).toISOString().split("T")[0]}</b>
      </p>
    </div>
  );
}

export default Word;
