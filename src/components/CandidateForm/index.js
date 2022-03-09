import { useState } from "react";


function CandidateForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label txt>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default CandidateForm
