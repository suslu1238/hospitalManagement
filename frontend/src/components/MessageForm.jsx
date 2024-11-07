// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const MessageForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleMessage = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/v1/message/send",
//           { firstName, lastName, email, phone, message },
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         )
//         .then((res) => {
//           toast.success(res.data.message);
//           setFirstName("");
//           setLastName("");
//           setEmail("");
//           setPhone("");
//           setMessage("");
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div className="container form-component message-form">
//         <h2>Send Us A Message</h2>
//         <form onSubmit={handleMessage}>
//           <div>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <textarea
//             rows={7}
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <div style={{ justifyContent: "center", alignItems: "center" }}>
//             <button type="submit">Send</button>
//           </div>
//         </form>
//         <img src="/Vector.png" alt="vector" />
//       </div>
//     </>
//   );
// };

// export default MessageForm;



import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Validation function
  const validateForm = () => {
    if (!firstName || !lastName) {
      toast.error("First Name and Last Name are required.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!message) {
      toast.error("Message is required.");
      return false;
    }

    return true;
  };

  const handleMessage = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) return;

    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  );
};

export default MessageForm;
