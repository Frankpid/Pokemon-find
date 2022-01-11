const helpers = [];

helpers.normalizeText = (e) => {
   let 
   onlyText = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,""),
   convertToLowercase = onlyText.toLowerCase();

   return convertToLowercase;
}

helpers.capitalizeFirtsLetter = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export default helpers;