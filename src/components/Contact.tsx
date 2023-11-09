import { zodResolver } from "@hookform/resolvers/zod";
import SectionComponents from "./SectionComponents";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import Title from "./Title";
import GroupForm from "./GroupForm";
import ButtonLink from "./ButtonLink";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export type TFormData = {
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
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: TFormData) => {
    setError("");
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      await axios.post(
        "https://site--marvel-backend--fwddjdqr85yq.code.run/portfolio",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Your message have been sent");
    } catch (error) {
      setError("An error has occurred");
    }
  };

  console.log(errors);

  return (
    <SectionComponents>
      <Title title="< Contacts />" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-center gap-y-12 p-8"
      >
        <GroupForm>
          <label className=" text-lg" htmlFor="name">
            Please enter your name :
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            {...register("name")}
            className={
              errors.name
                ? "p-2 border bg-red-200  rounded-lg w-full "
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.name && (
            <p className="text-red-700 dark:text-red-300">
              {errors.name.message}
            </p>
          )}{" "}
        </GroupForm>

        <GroupForm>
          <label className="text-lg" htmlFor="email">
            Please enter your email :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            {...register("email")}
            className={
              errors.email
                ? "p-2 border bg-red-200 rounded-lg w-full"
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.email && (
            <p className="text-red-700 dark:text-red-300">
              {errors.email.message}
            </p>
          )}
        </GroupForm>
        <GroupForm>
          <label className=" text-lg" htmlFor="message">
            Please enter your message :
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            {...register("message")}
            className={
              errors.message
                ? "p-2 border bg-red-200 rounded-lg w-full"
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.message && (
            <p className="text-red-700 dark:text-red-300">
              {errors.message.message}
            </p>
          )}
        </GroupForm>
        <button
          type="submit"
          className="bg-lgButton h-12 w-24 text-white rounded-2xl hover:bg-lgElementSeparator dark:hover:bg-blElementSeparator"
        >
          SEND
        </button>
        {error && <p className="text-red-700 dark:text-red-300">{error}</p>}
        {success && (
          <p className="text-lgTextMin dark:text-blTextMin">{success}</p>
        )}
      </form>
      <nav className="flex gap-x-3 justify-center mt-16">
        <ButtonLink
          icon={faGithub}
          link="https://github.com/ErwanPel"
          name="Github"
        />
        <ButtonLink
          icon={faLinkedinIn}
          link="https://linkedin.com/in/erwan-pellerin-1a6387211"
          name="Linkedin"
        />
        <ButtonLink
          icon={faEnvelope}
          link="mailto:erwanpellerinpro@gmail.com"
          name="erwanpellerinpro@gmail.com"
        />
      </nav>
    </SectionComponents>
  );
}
