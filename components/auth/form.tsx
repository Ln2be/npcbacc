import Link from "next/link";
import React from "react";

interface formType {
  isLogin: boolean;
  errorMessage: string;
  space: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form = ({ isLogin, errorMessage, space, onSubmit }: formType) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Username</span>
      <input type="text" name="username" required />
    </label>

    <label>
      <span>Password</span>
      <input type="password" name="password" required />
    </label>
    {!isLogin && (
      <label>
        <span>Repeat password</span>
        <input type="password" name="rpassword" required />
      </label>
    )}

    <div className="submit">
      {isLogin ? (
        <>
          {space == "admin" && (
            <Link href="/auth/signup?space=admin">
              <a>I don&apos;t have an account</a>
            </Link>
          )}
          {space == "user" && (
            <Link href="/auth/signup?space=user">
              <a>I don&apos;t have an account</a>
            </Link>
          )}

          <button type="submit">Login</button>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <a>I have an account</a>
          </Link>

          <button type="submit">Signup</button>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
);

export default Form;
