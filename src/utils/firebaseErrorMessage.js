export const firebaseErrorMessage = (msg) => {
  // Firebase error messages are in the format of:
  // "Error: [error code] ([error message])."
  // So we need to extract the error message from the string
  const errMsg = msg.split("(")[1].replace(").", "");
  switch (errMsg) {
    case "auth/user-not-found":
      return "Sorry, we couldn't find that user";
    case "auth/wrong-password":
      return "Oops, it looks like the password is incorrect";
    case "email-already-exists":
      return "This email is already in use. Please use a different one";
    case "auth/too-many-requests":
      return "We've received too many requests. Please try again later";
    case "auth/invalid-login-credentials":
      return "Your login credentials seem to be invalid. Please double-check";
    case "auth/unauthorized-domain":
      return "This domain is not authorized";
    default:
      return "Oops! Something went wrong. Please try again later";
  }
};
