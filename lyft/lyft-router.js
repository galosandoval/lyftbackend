const express = require("express");
const router = express.Router();

const reduceString = (stringToCut) => {
  const trimmedString = stringToCut.trim().replace(/ /g, "");
  let stringCount = trimmedString.length;
  let ansStr = "";
  let startIndex = 2;

  while (stringCount > 0) {
    const endIndex = startIndex + 1;
    const stringToAdd = trimmedString.slice(startIndex, endIndex);
    ansStr = ansStr + stringToAdd;
    stringCount -= 3;
    startIndex += 3;
  }

  return ansStr;
};

router.post("/", (req, res) => {
  const string = req.body["string_to_cut"];

  const ans = reduceString(string);
  res.status(201).json({ return_string: ans });
});

module.exports = router;
