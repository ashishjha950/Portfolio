import bootstrap from "../skillsSVGs/bootstrap.svg";
import c from "../skillsSVGs/c.svg";
import cplusplus from "../skillsSVGs/cplusplus.svg";
import css from "../skillsSVGs/css.svg";
import figma from "../skillsSVGs/figma.svg";
import git from "../skillsSVGs/git.svg";
import html from "../skillsSVGs/html.svg";
import java from "../skillsSVGs/java.svg";
import javascript from "../skillsSVGs/javascript.svg";
import materialui from "../skillsSVGs/materialui.svg";
import mongoDB from "../skillsSVGs/mongoDB.svg";
import nextJS from "../skillsSVGs/nextJS.svg";
import python from "../skillsSVGs/python.svg";
import react from "../skillsSVGs/react.svg";
import tailwind from "../skillsSVGs/tailwind.svg";
import typescript from "../skillsSVGs/typescript.svg";
import vitejs from "../skillsSVGs/vitejs.svg";
import express from "../skillsSVGs/express.svg";
import github from "../skillsSVGs/github.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "python":
      return python;
    case "vitejs":
      return vitejs;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "tailwind":
      return tailwind;
    case "express":
      return express;
    case "mongodb":
      return mongoDB;
    case "git":
      return git;
    case "github":
      return github;
    case "bootstrap":
      return bootstrap;
    case "figma":
      return figma;
    case "materialui":
      return materialui;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "java":
      return java;
    default:
      return null;
  }
};
