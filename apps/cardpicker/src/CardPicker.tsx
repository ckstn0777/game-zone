import { shuffle } from "lodash-es";
import { useState } from "react";
import { useAppShell } from "ui";
import { Button } from "ui/Button";

const CARDS = [-10, -5, 1, 5, 10];

export default function CardPicker() {
  const [cards, setCards] = useState<number[]>(shuffle(CARDS));
  const [played, setPlayed] = useState<number | null>(null);

  const { user, addScore } = useAppShell();

  if (!user) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid #c7c2c2",
        borderRadius: "5px",
        padding: "40px 30px",
      }}
    >
      <h2 style={{ marginTop: "0", marginBottom: "20px" }}>Card Picker Game</h2>
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {cards.map((card, index) => (
          <li
            key={index}
            style={{
              backgroundColor:
                played !== null
                  ? played === index
                    ? "#ccc"
                    : "#fff"
                  : "black",
              border: "1px solid #000",
              borderRadius: "5px",
              padding: "40px 30px",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => {
              addScore(card);
              setPlayed(index);
            }}
          >
            {card}
          </li>
        ))}
      </ul>
      <Button
        color="secondary"
        onClick={() => {
          setCards(shuffle(CARDS));
          setPlayed(null);
        }}
        style={{ width: "100%", height: "50px", cursor: "pointer" }}
      >
        Play Again
      </Button>
    </div>
  );
}
