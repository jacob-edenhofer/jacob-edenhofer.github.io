"use client";

import { useEffect } from "react";

// Footnotes sit in a closed <details>. Browsers do not reliably scroll to a
// target inside one, so when a footnote reference or a shared link targets an
// element inside a disclosure, open every enclosing disclosure and scroll to it.
export function FootnoteDisclosure() {
  useEffect(() => {
    const reveal = (behavior: ScrollBehavior) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target || !target.closest("details")) return;
      for (let element = target.parentElement; element; element = element.parentElement) {
        if (element instanceof HTMLDetailsElement) element.open = true;
      }
      target.scrollIntoView({ behavior });
    };
    // Jump straight to a footnote when the page loads with its address; scroll smoothly when a link is followed later.
    reveal("instant");
    const onHashChange = () => reveal("auto");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return null;
}
