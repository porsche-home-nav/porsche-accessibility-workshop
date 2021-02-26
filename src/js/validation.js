// form validation
const submitBtn = document.getElementById("ks-submit-btn");
const required = document.querySelectorAll("[required]");
const accessible = document.body.className === "ks-accessible";

const setAttributes = (el, attrs) => {
  Object.keys(attrs).forEach((key) => {
    el.setAttribute(key, attrs[key]);
  });
};

const removeAttributes = (el, attrs) => {
  attrs.forEach((key) => {
    el.removeAttribute(key, attrs[key]);
  });
};

const validate = (e) => {
  e.preventDefault();
  required.forEach((el) => {
    // Category
    if (el.name === "category" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please choose a category" : "Error",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Subject
    if (el.name === "subject" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please enter a subject" : "Input is wrong",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Message
    if (el.name === "message" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please enter a message" : "Undefined",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Salutation
    if (el.name === "salutation" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please choose a salutation" : "Nothing chosen",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // First
    if (el.name === "name" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please enter your first name" : "Name missing",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Last
    if (el.name === "surname" && el.value === "") {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please enter your last name" : "Name missing",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Email
    if (el.name === "email" && (el.value === "" || !el.value.includes("@"))) {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible ? "Please enter a valid email address" : "",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }

    // Policy
    if (el.name === "privacy" && !el.checked) {
      setAttributes(el.parentElement, {
        state: "error",
        message: accessible
          ? "Please read and accept the privacy policy"
          : "Nothing accepted",
      });
      return false;
    } else {
      removeAttributes(el.parentElement, ["state", "message"]);
    }
  });
  return true;
};

submitBtn.addEventListener("click", validate);
