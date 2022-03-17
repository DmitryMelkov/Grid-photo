import JustValidate from "just-validate";

export function validateEmail() {
  const validateEmail = new JustValidate(".about-us-validate");
  const validateContacts = new JustValidate(".form-validate");

  validateEmail.addField(".about-us__email", [
    {
      rule: "required",
      errorMessage: "Введите Email",
    },
    {
      rule: "email",
      errorMessage: "Невалидный Email!",
    },
  ]);

  validateContacts
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите имя",
      },
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "maxLength",
        value: 15,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите Email",
      },
      {
        rule: "email",
        errorMessage: "Невалидный Email!",
      },
    ]);
}
