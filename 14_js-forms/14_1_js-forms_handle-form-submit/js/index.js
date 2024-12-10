console.clear();

const form = document.querySelector('[data-js="form"]');
// console.log("FORM_OBJECT_", form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submit behavior w/ reload page on submit
  // console.log("EVENT_TARGET_(FORM)_", event.target);

  // V1 / LONG WAY

  // V1.1 / List all Elements
  const formElements = event.target.elements;
  // console.log("FORM_ELEMENTS_V1_", formElements); // List all formElements
  // console.log("FIRST_NAME_ELEMENTS_V1_", formElements.firstName); // List firstName Element
  // console.log("FIRST_NAME_VALUE_V1_", formElements.firstName.value); // List firstName Value

  // V1.2 / List User Input
  const userDataV1 = {
    // Personal Information
    firstName: formElements.firstName.value,
    lastName: formElements.lastName.value,
    age: formElements.age.value,
    email: formElements.email.value,
    // Your complaint
    complaint: formElements.complaint.value,
    details: formElements.details.value,
    badness: formElements.badness.value,
    orderDate: formElements.orderDate.value,
    tos: formElements.tos.value,
  };

  // V1.3 / Log User Input
  console.log("USER_DATA_V1_(LONG_WAY)_", userDataV1);

  // V2 / SHORT WAY

  // List From Data
  const formData = new FormData(event.target);
  // List User Input
  const userDataV2 = Object.fromEntries(formData);
  console.log("USER_DATA_V2_(SHORT_WAY)_", userDataV2);

  // RESET FORM
  event.target.reset();
  formElements.firstName.focus();
});
