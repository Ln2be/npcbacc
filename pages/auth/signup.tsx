import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { useUser } from "../../lib/auth/hooks";
import Layout from "../../components/auth/layout";
import Form from "../../components/auth/form";

const Signup = () => {
  const space1 = useRouter().query.space;
  const space = typeof space1 === "string" ? space1 : "";
  useUser({ redirectTo: "/", redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      role: space,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("//auth/login");
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
      <div className="login">
        <Form
          isLogin={false}
          space={space}
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
    </Layout>
  );
};

export default Signup;
