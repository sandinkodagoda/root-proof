"use client";

import { useState } from "react";

export default function MockForm({ className, message, children }) {
  const [note, setNote] = useState("");

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        setNote(message || "Thank you. This mock form has been submitted.");
        event.currentTarget.reset();
      }}
    >
      {children}
      <p className="form-note" aria-live="polite">
        {note}
      </p>
    </form>
  );
}
