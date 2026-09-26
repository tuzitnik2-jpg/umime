"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { QuizTemplateDemo } from "@/components/QuizTemplateDemo";

type Variant = "cards" | "fullscreen" | "list";

export function QuizTemplatesShowcase({ dict }: { dict: Dictionary }) {
  const [picked, setPicked] = useState<Variant | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("selectedQuizTemplate");
      if (stored === "cards" || stored === "fullscreen" || stored === "list") {
        // Hydrating from localStorage after mount — server has no access to
        // it, so this can only happen once the client takes over.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPicked(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  function pick(variant: Variant) {
    setPicked(variant);
    try {
      localStorage.setItem("selectedQuizTemplate", variant);
    } catch {
      // ignore
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <QuizTemplateDemo variant="cards" dict={dict} selected={picked === "cards"} onPick={() => pick("cards")} />
      <QuizTemplateDemo
        variant="fullscreen"
        dict={dict}
        selected={picked === "fullscreen"}
        onPick={() => pick("fullscreen")}
      />
      <QuizTemplateDemo variant="list" dict={dict} selected={picked === "list"} onPick={() => pick("list")} />
    </div>
  );
}
