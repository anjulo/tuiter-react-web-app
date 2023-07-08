import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionalOutputInline from "./conditional-output-inline";

const ConditionalOutput = () => {
 return(
   <React.Fragment>
     <ConditionalOutputIfElse/>
     <ConditionalOutputInline/>
   </React.Fragment>
 );
};

export default ConditionalOutput;