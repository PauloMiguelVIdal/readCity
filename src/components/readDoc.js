import React, { useEffect } from "react";
import matter from "gray-matter";

export default function TesteMarkdown() {
  useEffect(() => {
    const md = `
---
data: 2026-05-05
paginas_lidas: 10
---

Hoje foi um bom dia
    `;

    const parsed = matter(md);

    console.log("Frontmatter:", parsed.data);
    console.log("Conteúdo:", parsed.content);
  }, []);

  return <div>Teste Markdown</div>;
}