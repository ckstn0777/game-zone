import { random } from "lodash-es";
import { useEffect, useState } from "react";
import { useAppShell } from "ui";
import { Button } from "ui/Button";

export default function CardPicker() {
  const { user, addScore } = useAppShell();

  const [inputNum, setInputNum] = useState<number | null>(null);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);
  const [randomNum, setRandomNum] = useState(random(1, 100));
  const [attemptCnt, setAttemptCnt] = useState(0);

  const handleInputNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNum(Number(e.target.value));
  };

  useEffect(() => {
    if (selectedNum === randomNum) {
      addScore(30 - 5 * attemptCnt); // 30점부터 5점씩 깎임
    }
  }, [selectedNum]);

  if (!user) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid #c7c2c2",
        borderRadius: "5px",
        padding: "60px 70px",
      }}
    >
      <h2 style={{ marginTop: "0", marginBottom: "20px" }}>Up Down Game</h2>

      <p>1 ~ 100 사이의 숫자 중에 맞추는 게임입니다.</p>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          style={{
            flex: 1,
            padding: "16px 16px",
            border: "1px solid #eaecee",
            fontSize: "20px",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setAttemptCnt(attemptCnt + 1);
              setSelectedNum(inputNum);
            }
          }}
          onChange={handleInputNum}
        />
        <span>
          <Button
            style={{ height: "100%" }}
            onClick={() => {
              setAttemptCnt(attemptCnt + 1);
              setSelectedNum(inputNum);
            }}
          >
            선택
          </Button>
        </span>
      </div>

      <p>
        시도 횟수 : {attemptCnt} / 현재 점수 : {30 - 5 * attemptCnt}{" "}
      </p>

      {selectedNum &&
        (selectedNum === randomNum ? (
          <p>정답입니다!</p>
        ) : selectedNum > randomNum ? (
          <p>Down 입니다!</p>
        ) : (
          <p>Up 입니다!</p>
        ))}

      <Button
        color="secondary"
        style={{ width: "100%", height: "50px", cursor: "pointer" }}
        onClick={() => {
          setRandomNum(random(1, 100));
          setAttemptCnt(0);
        }}
      >
        Play Again
      </Button>
    </div>
  );
}
