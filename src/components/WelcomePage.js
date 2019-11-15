import React from "react";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
      <Head>
        <h1>Let's get schwifty!</h1>
        <img
          className="main-img"
          src="https://static.lootcrate.com/yrk2x9n6p9s5/7qe1Eupm4acN9PffLD5WLw/3586f3356d4526cfd964b8dfed7f9887/slide-1-OptA.gif"
          alt="rick"
        />
        </Head>
      </header>
    </section>
  );
}
