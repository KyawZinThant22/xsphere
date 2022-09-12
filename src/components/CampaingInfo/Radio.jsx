import React from "react";
import { RadioComponent } from "../Csx/Csx";

const Radio = () => {
  return (
    <div className="mb-4">
      <h6 className="text-sm font-medium mb-2">Show Profile</h6>
      <RadioComponent
        idText={"xsphere"}
        name={"profile"}
        value={"xsphere"}
        isChecked={true}
      />
      <RadioComponent idText={"getbak"} name={"profile"} value={"getbak"} />
    </div>
  );
};

export default Radio;
