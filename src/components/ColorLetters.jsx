"use strict"
import { React, useState } from 'react';

function ColorLetters() {
  const [synesthesiaEnabled, setSynesthesiaEnabled] = useState(false);

  const toggleSynesthesia = () => {
    setSynesthesiaEnabled(!synesthesiaEnabled);
  };

  const applySynesthesia = (text) => {
    const colors = {
      A: "#FFA54F", B: "#F5F5DC", C: "#FFFDD0", D: "#D19290", E: "#C2B280",
      F: "#EEDC82", G: "#FFD700", H: "#FFB700", I: "#FFFFF0", J: "#F8DE7E",
      K: "#C3B091", L: "#E6E6FA", M: "#BDFCC9", N: "#F0DCC6", O: "#FFFFFB",
      P: "#FFE5B4", Q: "#CACCC4", R: "#B76E79", S: "#F4A460", T: "#8B8589",
      U: "#4166F5", V: "#F3E5AB", W: "#FFFFFF", X: "#738678", Y: "#FFFF00",
      Z: "#76B9D7"
    };

    const letters = text.split('');

    return letters.map((letter, index) => (
      <span key={index} style={{ color: synesthesiaEnabled ? colors[letter.toUpperCase()] : 'inherit' }}>
        {letter}
      </span>
    ));
  };

  return (
    <div>
      {synesthesiaEnabled ? (
        <button onClick={toggleSynesthesia}>Disable Synesthesia</button>
      ) : (
        <button onClick={toggleSynesthesia}>Enable Synesthesia</button>
      )}
      <div>
        {applySynesthesia("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur")}
        
      </div>
    </div>
  );
}

export default ColorLetters;
