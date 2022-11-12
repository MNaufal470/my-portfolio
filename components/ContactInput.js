import React, { useReducer } from "react";

const formReducer = (state, action) => {
  if (action.type === "notEmpty") {
    if (action.val.trim() === "") {
      return { value: "", errors: "This field is required", isValid: false };
    } else {
      return { value: action.val, errors: "", isValid: true };
    }
  }
  if (action.type === "email") {
    if (action.val.trim() === "") {
      return { value: "", errors: "This field is required", isValid: false };
    } else if (!action.val.includes("@")) {
      return {
        value: state.value,
        errors: "Please input a valid email",
        isValid: false,
      };
    } else {
      return { value: action.val, errors: "", isValid: true };
    }
  }
};

const ContactInput = (props) => {
  const [name, dispatchName] = useReducer(formReducer, {
    value: "",
    errors: "",
    isValid: "",
  });
  const [phone, dispatchPhone] = useReducer(formReducer, {
    value: "",
    errors: "",
    isValid: "",
  });
  const [email, dispatchEmail] = useReducer(formReducer, {
    value: "",
    errors: "",
    isValid: "",
  });
  const [subject, dispatchSubject] = useReducer(formReducer, {
    value: "",
    errors: "",
    isValid: "",
  });
  const [message, dispatchMessage] = useReducer(formReducer, {
    value: "",
    errors: "",
    isValid: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.isValid &&
      phone.isValid &&
      email.isValid &&
      subject.isValid &&
      message.isValid
    ) {
      window.location.href = `mailto:naufal.sabartudin@gmail.com?subject=${subject.value}&body= My name:${name.value} ${message.value} (${email.value}) Phone Number: ${phone.value}`;
    } else {
      dispatchName({ type: "notEmpty", val: name.value });
      dispatchPhone({ type: "notEmpty", val: phone.value });
      dispatchEmail({ type: "email", val: email.value });
      dispatchSubject({ type: "notEmpty", val: subject.value });
      dispatchMessage({ type: "notEmpty", val: message.value });
    }
  };
  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-10 gap-y-5 w-full ">
        <div className="space-y-2.5">
          <label htmlFor="" className="labelInput">
            Your Name
          </label>
          <input
            type="text"
            className={`inputContact ${
              name.isValid === false ? "invalid" : ""
            }`}
            onChange={(e) =>
              dispatchName({ type: "notEmpty", val: e.target.value })
            }
          />
          {name.isValid === false && (
            <p className="text-red-400 text-xs animate-pulse">{name.errors}</p>
          )}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="" className="labelInput">
            Phone Number
          </label>
          <input
            type="text"
            className={`inputContact ${
              phone.isValid === false ? "invalid" : ""
            }`}
            onChange={(e) =>
              dispatchPhone({ type: "notEmpty", val: e.target.value })
            }
          />
          {phone.isValid === false && (
            <p className="text-red-400 text-xs animate-pulse">{phone.errors}</p>
          )}
        </div>
      </div>
      <div className="space-y-2.5">
        <label htmlFor="" className="labelInput">
          Email
        </label>
        <input
          type="email"
          className={`inputContact ${email.isValid === false ? "invalid" : ""}`}
          onChange={(e) =>
            dispatchEmail({ type: "email", val: e.target.value })
          }
        />
        {email.isValid === false && (
          <p className="text-red-400 text-xs animate-pulse">{email.errors}</p>
        )}
      </div>
      <div className="space-y-2.5">
        <label htmlFor="" className="labelInput">
          Subject
        </label>
        <input
          type="text"
          className={`inputContact ${
            subject.isValid === false ? "invalid" : ""
          }`}
          onChange={(e) =>
            dispatchSubject({ type: "notEmpty", val: e.target.value })
          }
        />
        {subject.isValid === false && (
          <p className="text-red-400 text-xs animate-pulse">{subject.errors}</p>
        )}
      </div>
      <div className="space-y-2.5">
        <label htmlFor="" className="labelInput">
          Message
        </label>
        <textarea
          rows={5}
          className={`inputContact ${
            message.isValid === false ? "invalid" : ""
          }`}
          onChange={(e) =>
            dispatchMessage({ type: "notEmpty", val: e.target.value })
          }
        />
        {message.isValid === false && (
          <p className="text-red-400 text-xs animate-pulse">{message.errors}</p>
        )}
      </div>
      <button
        className="py-3 uppercase text-[#a0a8b3] w-full shadow-1 backgroundButton tracking-[1px] rounded-md animate-pulse"
        type="submit"
        onClick={handleSubmit}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactInput;
