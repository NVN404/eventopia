import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../assets/logo/dream-craft.png";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Contact = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    // //console.log("click")
    e.preventDefault();
    if (!user) {
      // If user is not logged in, redirect to login page
      // navigate('/login');
      toast.error(
        "Please Log in first!"
      );
      return;
    }
    // Handle form submission logic here
    //console.log("Email:", email);
    //console.log("Subject:", subject);
    //console.log("Message:", message);
    const info = {
      email, subject, message
    }
    axiosPublic.post('/contact', info).then(res => {
      //console.log(res.data)

    })
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mt-5 underline">
        Contact Us
      </h2>
      <div className="mt-10 p-5 flex flex-col md:flex-row max-w-5xl mx-auto text-black ">
        <div className=" md:w-1/2">
          <img src={logo} alt="" className="w-32" />
          <h2 className="text-2xl font-semibold  mb-3">Address</h2>
          <hr className="w-32 " />
          <h2 className="text-2xl font-semibold">+91 1663938636</h2>
          <p className="text-base mb-3">Book online or call</p>
          <h2 className="text-2xl font-semibold">yugitha2003@gmail.com</h2>
          <div className="flex items-center ">
            <p className="text-base mb-3">
              Send us an email or use contact form
            </p>
            <AiOutlineArrowRight className="text-xl ml-2 "></AiOutlineArrowRight>
          </div>
          <h2 className="text-2xl font-semibold">Our address</h2>
          <p className="text-base mb-3">
            <br /> bangalore
          </p>
        </div>



      </div>
    </div>
  );
};

export default Contact;
