import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail-close" />
      </div>

      <form onSubmit={handleSubmit()}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={...register("to", { required: true })}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={...register("subject",{ required: true })}
        />
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail-message"
          ref={...register({ required: true })}
        />

        <div className="sendMail-options">
          <Button className="sendMail-send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
