export const formatDate = (text) => {
  // Eliminar todos los caracteres no numéricos del texto
  const cleanedText = text.replace(/\D/g, "");

  // Aplicar el formato dd/mm/yy
  let formattedDate = cleanedText;

  if (cleanedText.length > 2 && cleanedText.length <= 4) {
    formattedDate = cleanedText.replace(/^(\d{2})(\d{2})/, "$1/$2");
  } else if (cleanedText.length > 4) {
    formattedDate = cleanedText.replace(/^(\d{2})(\d{2})(\d{2})/, "$1/$2/$3");
  }

  return formattedDate.length <= 8 ? formattedDate : formattedDate.slice(0, 8);
};

//esta me sirve

export const formatPhoneNumber = (text) => {
  // Eliminar todos los caracteres no numéricos del texto
  const cleanedText = text.replace(/\D/g, "");

  // Aplicar el formato (XXX) XXX-XXXX
  let formattedPhoneNumber = cleanedText;

  if (cleanedText.length > 2 && cleanedText.length <= 5) {
    formattedPhoneNumber = cleanedText.replace(/^(\d{3})(\d{3})/, "($1) $2");
  } else if (cleanedText.length > 5) {
    formattedPhoneNumber = cleanedText.replace(
      /^(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
  }

  return formattedPhoneNumber.length <= 14
    ? formattedPhoneNumber
    : formattedPhoneNumber.slice(0, 14);
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Expresión regular para validar un número de teléfono con formato (XXX) XXX-XXXX
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  return phoneRegex.test(phoneNumber);
};

export const isValidEmailRefer = (email) => {
  // Expresión regular para validar la fecha de nacimiento en formato dd/mm/yy
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const isValidDateOfBirth = (dateOfBirth) => {
  // Expresión regular para validar la fecha de nacimiento en formato dd/mm/yy
  const dateOfBirthRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;

  return dateOfBirthRegex.test(dateOfBirth);
};
