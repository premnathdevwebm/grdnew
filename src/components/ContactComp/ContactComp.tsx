import React, { useReducer, ChangeEvent } from "react";
import styles from "components/ContactComp/ContactComp.module.css";
import api from "components/ContactComp/api/api";
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface UpdateFieldAction {
  type: "UPDATE_FIELD";
  field: keyof FormState;
  value: string;
}

type FormAction = UpdateFieldAction;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const ContactComp: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field: keyof FormState, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      to: state.email,
      subject: "Reply Back",
      htmlContent: `<html>><head><style>body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .header {
        color: #d9534f;
        text-align: center;
        margin-bottom: 20px;
    }
    .message {
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
        color: #d9534f;
    }
</style></head><body>
<div class="container">
    <div class="header">
        <h1>Reply Back</h1>
    </div>
    <div class="message">
        <p>Hello <span style="color: #d9534f;">${state.firstName}</span>,</p>
        <p>We received your message and will be in touch with you soon regarding your callback request.</p>
        <p>Your patience is highly appreciated.</p>
    </div>
</div>
</body></html>`,
    };
    try {
      const response = await api.post("/send-email", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <h3>Let’s Work Together!</h3>
        <p>
          Let us help you become even greater at what you do. Fill out the
          following form and we will get back to you in the next 24 hours.
        </p>
      </div>
      <div className={styles.content2}>
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
          <div className={styles.column1}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="First Name"
                value={state.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("firstName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={state.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("lastName", e.target.value)
                }
              />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("email", e.target.value)
                }
              />
              <input
                type="tel"
                placeholder="Phone"
                value={state.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("phone", e.target.value)
                }
              />
            </div>
          </div>
          <div className={styles.column2}>
            <textarea
              placeholder="Enter Message Here..."
              value={state.message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleChange("message", e.target.value)
              }
            ></textarea>
          </div>
          <div className={styles.column3}>
            <button type="submit">Submit &gt;</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComp;
