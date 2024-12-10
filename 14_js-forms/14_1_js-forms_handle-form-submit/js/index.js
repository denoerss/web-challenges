console.clear();

const form = document.querySelector('[data-js="form"]');
// console.log("FORM_OBJECT_", form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submit behavior w/ reload page on submit
  // console.log("EVENT_TARGET_(FORM)_", event.target);

  // V1 / LONG WAY

  // V1.1 / List all Elements
  const formElements = event.target.elements;
  // console.log("FIRST_NAME_", formElements.firstName); // firstName Element
  // console.log("FIRST_NAME_VALUE_", formElements.firstName.value); // firstName Value

  // V1.2 / List User Input
  // Personal Information
  const userDataV1 = {
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
  console.log("V1_LONG_", userDataV1);
});
