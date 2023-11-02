import { zodResolver } from "@hookform/resolvers/zod";
import SectionComponents from "./SectionComponents";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

const formSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email().trim(),
  message: z.string().min(2).trim(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: TFormData) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://site--marvel-backend--fwddjdqr85yq.code.run/portfolio",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  return (
    <SectionComponents>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Please enter your name :</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            {...register("name")}
          />
        </div>
        {errors.name && <p>{errors.name.message}</p>}
        <div>
          <label htmlFor="email">Please enter your email :</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message">Please enter your message :</label>
          <textarea
            id="message"
            placeholder="Your Message"
            {...register("message")}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-lgButton py-2 px-4 text-white rounded-xl"
        >
          SEND
        </button>
      </form>
    </SectionComponents>
  );
}
