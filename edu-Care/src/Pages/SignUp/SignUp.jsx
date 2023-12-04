import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import useData from "../../Hooks/useData";
import toast from "react-hot-toast";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const { signUpWithEmail, updateUser, logOut } = useAuth();

  const { dark } = useData();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const user = {
      name,
      email,
      photoURL,
      password,
    };
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    const toastId = toast.loading("Signing Up...");

    if (password !== confirmPassword) {
      toast.error("Please confirm your password.", { id: toastId });
    } else if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have 6 characters and one letter and one special character.",
        { id: toastId }
      );
    } else {
      signUpWithEmail(email, password)
        .then(() => {
          // emailVerification().then(() => {
          //   toast.info("Please verify your email.");
          // });

          fetch("https://assignment11-server-xi.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.insertedId) {
                toast.success("Sign Up Successful.", { id: toastId });
                updateUser(name, photoURL)
                  .then(() => {
                    toast.success("Profile Updated.", { id: toastId });
                  })
                  .catch((err) => {
                    toast.error(err.message, { id: toastId });
                  });
                logOut().then().catch();
                navigate("/login");
              }
            });
        })
        .catch((err) => {
          toast.error(err.message, { id: toastId });
        });
    }
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto rounded border border-[#ABABAB] my-10">
      <div>
        <h2 className="text-lg font-bold">Create An Account</h2>
      </div>

      <form onSubmit={handleSignUp} className="mt-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="UserName"
            required
            className={
              dark
                ? "block w-full text-xs placeholder:text-white text-white py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
                : "block w-full text-xs placeholder:text-[#000000] text-[#000000] py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            }
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={
              dark
                ? "block w-full text-xs placeholder:text-white text-white py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
                : "block w-full text-xs placeholder:text-[#000000] text-[#000000] py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            }
          />
        </div>

        <div>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
            className={
              dark
                ? "block w-full text-xs placeholder:text-white text-white py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
                : "block w-full text-xs placeholder:text-[#000000] text-[#000000] py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            }
          />
        </div>

        <div className="mt-4 relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            className={
              dark
                ? "block w-full text-xs placeholder:text-white text-white py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
                : "block w-full text-xs placeholder:text-[#000000] text-[#000000] py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            }
          />
          <div
            className="absolute right-2 top-3 inline-block cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
          </div>
        </div>

        <div className="mt-4 relative">
          <input
            type={show1 ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className={
              dark
                ? "block w-full text-xs placeholder:text-white text-white py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
                : "block w-full text-xs placeholder:text-[#000000] text-[#000000] py-2 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            }
          />
          <div
            className="absolute right-2 top-3 inline-block cursor-pointer"
            onClick={() => setShow1(!show1)}
          >
            {show1 ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
          </div>
        </div>

        <div className="mt-6">
          <button
            className={
              dark
                ? "w-full px-6 py-2.5 text-sm font-medium tracking-wide rounded-sm bg-active-color text-white"
                : "w-full px-6 py-2.5 text-sm font-medium tracking-wide rounded-sm bg-active-color"
            }
          >
            Sign Up
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs font-light text-center">
        {" "}
        Already have an account?{" "}
        <Link
          to={"/logIn"}
          className="font-medium text-active-color hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
