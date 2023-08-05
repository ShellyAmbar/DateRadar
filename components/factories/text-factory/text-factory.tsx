import React from "react";
import TextFactoryProps from "./interfaces";
import TextError from "./text-error/text-error";
import TextH1 from "./text-h1/text-h1";
import TextH2 from "./text-h2/text-h2";
import TextH3 from "./text-h3/text-h3";
import TextH4 from "./text-h4/text-h4";
import TextH5 from "./text-h5/text-h5";
import TextH6 from "./text-h6/text-h6";
import TextLabel from "./text-label/text-label";
import TextBodyText1 from "./text-body-text1/text-body-text1";
import Text from "../../controllers/text/text";
const TextFactory = ({type, ...props}: TextFactoryProps) => {
  switch (type) {
    case "error":
      return <TextError {...props} />;

    case "h1":
      return <TextH1 {...props} />;
    case "h2":
      return <TextH2 {...props} />;
    case "h3":
      return <TextH3 {...props} />;
    case "h4":
      return <TextH4 {...props} />;
    case "h5":
      return <TextH5 {...props} />;
    case "h6":
      return <TextH6 {...props} />;
    case "body-text1":
      return <TextBodyText1 {...props} />;

    case "label":
      return <TextLabel {...props} />;
    default:
      return <Text {...props} />;
  }
};

export default TextFactory;
