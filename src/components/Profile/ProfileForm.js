import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const changePwFormHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(enteredNewPassword);

    // send a request to the appropriate API endpoint
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCxW8u2xJJHfEbIZfJxOsYjZ44voKSYYhE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            console.log(data);
            throw new Error("Something went wrong!");
          });
        }
      })
      .then((data) => {
        console.log(data);
        history.replace("/");
        alert("Successfully Changed Your Password!");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <form className={classes.form} onSubmit={changePwFormHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
          minLength="6"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
