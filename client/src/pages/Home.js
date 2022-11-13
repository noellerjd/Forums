import React from "react";

import Postboard from "../components/Postboard";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center shadow-sm">Forum Home</div>
      <Postboard />
    </section>
  );
}
