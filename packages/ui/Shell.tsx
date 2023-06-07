"use client";
import { useAppShell } from "./useAppShell";

type ShellProps = {
  title: string;
  children: React.ReactNode;
};

export function Shell({ title, children }: ShellProps) {
  const { user, score, setUser } = useAppShell();

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: "0",
          zIndex: "10",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#c7c2c2",
        }}
      >
        <h1>{title}</h1>
        <div>
          {user ? (
            <>
              <span style={{ fontSize: "18px", marginRight: "16px" }}>
                {user} - 점수: {score}
              </span>
              <button
                style={{
                  padding: "0 16px",
                  height: "40px",
                  backgroundColor: "#f50076",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                  border: "none",
                }}
                onClick={() => setUser(null)}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              style={{
                padding: "0 16px",
                height: "40px",
                backgroundColor: "#f50076",
                color: "white",
                borderRadius: "4px",
                fontSize: "14px",
                outline: "none",
                border: "none",
              }}
              onClick={() => setUser("ckstn0777")}
            >
              Login
            </button>
          )}
        </div>
      </header>

      <main
        style={{
          position: "absolute",
          inset: "0",
          backgroundColor: "#e9e7e7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </>
  );
}
