import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useUser } from "../lib/auth/hooks";
import { translate } from "../lib/myFunctions";

// the form for the document
export function showDocs(subjs: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(subjs).map((field, index) => {
        const fieldlevel = subjs[field];
        // return showDocs(subs2);
        return (
          <Box
            key={index}
            sx={{
              m: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                fontSize: 30,
              }}
            >
              {translate[field]}
            </Box>
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
              }}
            >
              {Object.keys(fieldlevel).map((chapter, index) => {
                const chapterlevel = fieldlevel[chapter];
                return (
                  <Box key={index}>
                    <Box>
                      {field != "general" && (
                        <Box sx={{ fontSize: 25 }}>{translate[chapter]}</Box>
                      )}
                      {Object.keys(chapterlevel).map(
                        (kind: string, index2: number) => {
                          const kindlevel = chapterlevel[kind];
                          return (
                            <Box sx={{ ml: 1 }} key={index2}>
                              <Link
                                href={
                                  "/docs?field=" +
                                  field +
                                  "&chapter=" +
                                  chapter +
                                  "&kind=" +
                                  kind
                                }
                              >
                                {translate[kind] + "  " + kindlevel.total}
                              </Link>
                            </Box>
                          );
                        }
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

// show file
export default function showFile(path: string, count: string) {
  const user = useUser();
  const admin = user?.role == "admin";
  const router = useRouter();

  return (
    <Box>
      <iframe
        src={
          "https://drive.google.com/viewerng/viewer?embedded=true&url=" + path
        }
        width={"100%"}
        height={"400px"}
      ></iframe>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a target={"_blank"} rel="noreferrer" href={path} download>
            <Button>Telecharger</Button>
          </a>
          {admin && (
            <Button
              onClick={() => {
                fetch("/api/docs?action=delete&count=" + count).then(() => {
                  router.reload();
                });
              }}
            >
              Delete
            </Button>
          )}
          <a
            target={"_blank"}
            rel="noreferrer"
            href={
              "https://wa.me/?text=" + "https://pcbacc.com/docs?count=" + count
            }
          >
            <Button>Partager</Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

const userbody: { [key: string]: string | string[] } = {
  username: "",
  departements: [],
  region: "",
  code: "",
  tel: "",
  password: "",
  rpassword: "",
  role: "",
};

const userlogin: { [key: string]: string } = {
  username: "",
  password: "",
};

// The user form
export function UserForm({
  isLogin = false,
  isAdmin = false,
}: {
  isLogin?: boolean;
  isAdmin?: boolean;
}) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const [disable, setDisable] = useState(false);

  function handleChangeLogin(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    userlogin[name] = value;
  }

  function submitLogin() {
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userlogin),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      data.json().then(() => {
        router.push("/");
      });
    });
  }
  function submitSignup() {
    if (errorMsg) setErrorMsg("");

    if (userbody.password !== userbody.rpassword) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    setDisable(true);
    userbody.role = isAdmin ? "admin" : "rep";

    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(userbody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      data.json().then((response) => {
        router.push("/sign?action=login");
      });
    });
  }
  //
  function handleChangeSignup(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    userbody[name] = value;
  }

  return (
    <Box>
      {isLogin ? (
        <Box
          sx={{
            maxWidth: "400px",
            p: 2,
            display: "grid",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "25px",
            }}
          >
            log in
          </Box>
          <TextField
            onChange={handleChangeLogin}
            name="username"
            label="whatsap"
          ></TextField>
          <TextField
            onChange={handleChangeLogin}
            name="password"
            label="mot de pass"
          ></TextField>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // alignItem: "right",
            }}
          >
            <Button onClick={submitLogin} variant="contained">
              login
            </Button>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <Link href={"/sign?action=signup"}>creer un compte</Link>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: "400px",
            p: 2,
            display: "grid",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "25px",
            }}
          >
            Enregistrer
          </Box>
          <TextField
            onChange={handleChangeSignup}
            name="username"
            defaultValue={userbody.username}
            label="Nom"
          ></TextField>
          <TextField
            onChange={handleChangeSignup}
            name="password"
            defaultValue={userbody.password}
            label="Mot de Passe"
          ></TextField>

          <TextField
            onChange={handleChangeSignup}
            defaultValue={userbody.rpassword}
            name="rpassword"
            label="Repeter le mode de passe"
          ></TextField>

          <TextField
            onChange={handleChangeSignup}
            defaultValue={userbody.tel}
            name="tel"
            label="Whatsapp"
          ></TextField>
          <Box
            sx={{
              alignItem: "right",
            }}
          >
            <Button
              onClick={submitSignup}
              variant="contained"
              disabled={disable}
            >
              Enregistrer
            </Button>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          color: "red",
        }}
      >
        {<p className="error">{errorMsg}</p>}
      </Box>
    </Box>
  );
}
