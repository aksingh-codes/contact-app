import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import twilio from "../api/twilio";
import countriesData from "../assets/countryCodes.json";
const countries = countriesData;

const notify = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

function NewContactModal({ isActiveNewContact, setIsActiveNewContact }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const newContact = (data) => {
    setLoading(true);

    twilio
      .post("/contact", {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.code + data.phone,
      })
      .then((res) => {
        console.log(res.data.message);
        notify(res.data.message);
        notify("Redirecting...");
        setLoading(false);
        setTimeout(() => {
          navigate(0);
        }, 5000);
      })
      .catch((err) => {
        notifyError("Phone number already exist or Email is not valid");

        setLoading(false);
      });
  };

  return (
    <div className={`modal ${isActiveNewContact ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div
        className="modal-content"
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "4px",
        }}
      >
        <h1 className="title">Create Contact</h1>
        <form onSubmit={handleSubmit((data) => newContact(data))}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                {...register("firstName", {
                  required: "This is required",
                })}
                className="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <p className="help is-danger">{errors.firstName?.message}</p>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                {...register("lastName", {
                  required: "This is required",
                })}
                className="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <p className="help is-danger">{errors.lastName?.message}</p>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                {...register("email", { required: "Email is required" })}
                className={`input`}
                type="email"
                placeholder="Email input"
              />
            </div>
            <p className="help is-danger">{errors.email?.message}</p>
          </div>

          <label className="label">Phone</label>

          <div style={{ marginBottom: 0 }} className="field has-addons">
            <p className="control" style={{ maxWidth: "150px" }}>
              <span className="select is-primary">
                <select
                  defaultValue={"+91"}
                  {...register("code", {
                    required: "Phone is required",
                  })}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.dial_code}>
                      {country.flag} {country.dial_code} {country.name}
                    </option>
                  ))}
                </select>
              </span>
            </p>
            <p className="control is-expanded">
              <input
                {...register("phone", {
                  required: "Phone is required",
                  validate: (value) =>
                    isValidPhoneNumber(watch("code") + value),
                })}
                className="input is-fullwidth"
                type="text"
                placeholder="Phone"
              />
            </p>
          </div>
          <p className="help is-danger">{errors.phone?.message}</p>
          <p className="help is-danger">
            {errors.phone &&
              errors.phone.type === "validate" &&
              "Phone Number is not valid"}
          </p>

          <div style={{ marginTop: 12 }} className="field is-grouped">
            <div className="control">
              <button
                type="submit"
                disabled={loading}
                className={`button is-link ${loading && "is-loading"}`}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                onClick={() => setIsActiveNewContact(false)}
                className="button is-link is-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsActiveNewContact(false)}
        className="modal-close is-large"
        aria-label="close"
      ></button>

      <ToastContainer />
    </div>
  );
}

export default NewContactModal;
