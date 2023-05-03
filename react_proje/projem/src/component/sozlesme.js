import React, { useState } from "react";
import Form from "./form";

function Sozlesme() {
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsConfirmed(true);
  };

  return (
    <div>
      <h2>Kullanıcı Sözleşmesi</h2>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="sozlesme">Sözleşmeyi okudum ve kabul ediyorum</label>
      </div>
      {isConfirmed && isChecked && <Form />}
    </div>
  );
}

export default Sozlesme;