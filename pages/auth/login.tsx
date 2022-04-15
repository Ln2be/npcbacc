import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { useUser } from "../../lib/auth/hooks";
import Layout from "../../components/auth/layout";
import Form from "../../components/auth/form";

const Login = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });
  //  useAdmin({ redirectTo: "/", redirectIfFound: true });

  const test_space = useRouter().query.space;

  const space = typeof test_space === "string" ? test_space : "";
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error: any) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Layout>
      <div>
        <div>Login as user</div>

        <div className="login">
          <Form
            space={space}
            isLogin
            errorMessage={errorMsg}
            onSubmit={handleSubmit}
          />
        </div>
        <style jsx>{`
          .login {
            max-width: 21rem;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Login;
