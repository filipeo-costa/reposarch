import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  {
    element: <EmojiTitle emoji={"🏗️💻"} title={"Open Source BIM"} />,
  },

  {
    element: (
      <Image
        src="/images/internet/Raphael.jpg"
        alt="Raphaël Vouilloz"
        caption="Guess lecturer: Raphaël Vouilloz"
      />
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h3>Raphaël Vouilloz</h3>
        <br />
        <h5></h5>
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/week01/js.png"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={"JavaScript is the programming language of the Web"}
        />
      </>
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },
  {
    element: <EmojiTitle emoji={"Lab 7 💻😺🐙"} title={"BlenderBIM"} />,
  },
];