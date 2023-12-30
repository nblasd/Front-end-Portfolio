"use client";
import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";

export default function Contactcard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const resetHandler = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      <div className="form-container">
        <div className="form">
          <span className="heading">Get in touch</span>
          <input
            placeholder="Name"
            value={formData.name}
            id="name"
            onChange={changeHandler}
            type="text"
            className="input"
          />
          <input
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            className="input"
          />
          <textarea
            placeholder="Say Hello"
            value={formData.message}
            onChange={changeHandler}
            rows={10}
            cols={30}
            id="message"
            name="message"
            className="textarea"
          ></textarea>
          <div className="button-container">
            <Popup
              trigger={<button className="send-button">Send</button>}
              position="top center"
            >
              <div className="h-96 w-[300px] md:w-[500px] bg-[#14213D] text-2xl rounded-md flex items-center justify-center text-[#018070]">
                <p className="w-[90%]">
                  Hey, this button capability requires a{" "}
                  <span className="text-[#FF7A01]">backend</span>, which I am
                  currently studying, and I will implement it{" "}
                  <span className="text-[#FF7A01]">soon</span>.
                </p>
              </div>
            </Popup>

            <div className="reset-button-container">
              <div
                onClick={resetHandler}
                id="reset-btn"
                className="reset-button"
              >
                Reset
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
