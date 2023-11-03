
function encodeEmail() {
  const emailInput = document.getElementById("emailInput");
  const encodedEmail = document.getElementById("encodedEmail");

  const regEmail = emailInput.value;
  let codeEmail = "";

  if (regEmail === "") {
    alert("Please enter your regular e-mail address.");
  } else {
    const regLength = regEmail.length;

    for (let i = 0; i < regLength; i++) {
      let charNum = "000";
      const curChar = regEmail.charAt(i);

      switch (curChar) {
        case "A":
          charNum = "065";
          break;
        case "a":
          charNum = "097";
          break;
        case "B":
          charNum = "066";
          break;
        case "b":
          charNum = "098";
          break;
        case "C":
          charNum = "067";
          break;
        case "c":
          charNum = "099";
          break;
        case "D":
          charNum = "068";
          break;
        case "d":
          charNum = "100";
          break;
        case "E":
          charNum = "069";
          break;
        case "e":
          charNum = "101";
          break;
        case "F":
          charNum = "070";
          break;
        case "f":
          charNum = "102";
          break;
        case "G":
          charNum = "071";
          break;
        case "g":
          charNum = "103";
          break;
        case "H":
          charNum = "072";
          break;
        case "h":
          charNum = "104";
          break;
        case "I":
          charNum = "073";
          break;
        case "i":
          charNum = "105";
          break;
        case "J":
          charNum = "074";
          break;
        case "j":
          charNum = "106";
          break;
        case "K":
          charNum = "075";
          break;
        case "k":
          charNum = "107";
          break;
        case "L":
          charNum = "076";
          break;
        case "l":
          charNum = "108";
          break;
        case "M":
          charNum = "077";
          break;
        case "m":
          charNum = "109";
          break;
        case "N":
          charNum = "078";
          break;
        case "n":
          charNum = "110";
          break;
        case "O":
          charNum = "079";
          break;
        case "o":
          charNum = "111";
          break;
        case "P":
          charNum = "080";
          break;
        case "p":
          charNum = "112";
          break;
        case "Q":
          charNum = "081";
          break;
        case "q":
          charNum = "113";
          break;
        case "R":
          charNum = "082";
          break;
        case "r":
          charNum = "114";
          break;
        case "S":
          charNum = "083";
          break;
        case "s":
          charNum = "115";
          break;
        case "T":
          charNum = "084";
          break;
        case "t":
          charNum = "116";
          break;
        case "U":
          charNum = "085";
          break;
        case "u":
          charNum = "117";
          break;
        case "V":
          charNum = "086";
          break;
        case "v":
          charNum = "118";
          break;
        case "W":
          charNum = "087";
          break;
        case "w":
          charNum = "119";
          break;
        case "X":
          charNum = "088";
          break;
        case "x":
          charNum = "120";
          break;
        case "Y":
          charNum = "089";
          break;
        case "y":
          charNum = "121";
          break;
        case "Z":
          charNum = "090";
          break;
        case "z":
          charNum = "122";
          break;
        case "0":
          charNum = "048";
          break;
        case "1":
          charNum = "049";
          break;
        case "2":
          charNum = "050";
          break;
        case "3":
          charNum = "051";
          break;
        case "4":
          charNum = "052";
          break;
        case "5":
          charNum = "053";
          break;
        case "6":
          charNum = "054";
          break;
        case "7":
          charNum = "055";
          break;
        case "8":
          charNum = "056";
          break;
        case "9":
          charNum = "057";
          break;
        case "&":
          charNum = "038";
          break;
        case " ":
          charNum = "032";
          break;
        case "_":
          charNum = "095";
          break;
        case "-":
          charNum = "045";
          break;
        case "@":
          charNum = "064";
          break;
        case ".":
          charNum = "046";
          break;
        default:
          charNum = "000";
      }

      if (charNum === "000") {
        codeEmail += curChar;
      } else {
        codeEmail += `&#${charNum};`;
      }
    }

    encodedEmail.value = codeEmail;
  }
}

// Function to escape HTML characters
function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}