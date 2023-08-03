import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <PageLink key={id} href={href} text={text} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
