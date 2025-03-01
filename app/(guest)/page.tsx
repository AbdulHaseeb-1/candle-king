export const dynamic = "force-dynamic";

import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WICK from "./wick";
import MirrorMarketConcept from "./components/mmc";
import What from "./components/what";
import Concepts from "./components/concepts";
import When from "./components/when";
import WordsOfKing from "./components/wordsofking";
import Footer from "./components/footer";
import Where from "./components/where";
import QuestionList from "./components/questions";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      {/* <div className="-my-20"> */}
      <Hero />?{/* </div> */}
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <WICK />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <MirrorMarketConcept />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <QuestionList />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <What />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <Concepts />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <When />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <Where />
      <div className="my-28 w-20 mx-auto  border-t-2 border-dotted bg-transparent border-sky-500" />
      <WordsOfKing />
      <Footer />
    </div>
  );
}
