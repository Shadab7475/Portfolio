const validateForm = (id, value) => {
  const val = value || ""; 

  switch (id) {
    case "name":
      if (val.length === 0) return "Name is required";
      if (val.length < 3) return "Name must be atleast 3 characters long";
      return "";

    case "email":
      if (val.length === 0) return "Email is required";
      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(val)
      )
        return "Email is invalid";
      return "";

    case "phone":
      if (val.length === 0) return "Phone Number is required";
      if (!/^[0-9]+$/.test(val)) return "Phone Number is invalid";
      if (val.length !== 10) return "Phone Number must be 10 digits long";
      return "";

    case "message":
      if (val.length === 0) return "Message is required";
      return "";

    default:
      return "";
  }
};

export { validateForm };
