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
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

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

  const { language } = useSelector((store: RootState) => store.language);

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

  return (
    <SectionComponents>
      <Title title="< Contacts />" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-center gap-y-12 p-8"
      >
        <GroupForm>
          <label className=" text-lg" htmlFor="name">
            {language !== "en" ? en.Contacts.labelName : fr.Contacts.labelName}
          </label>
          <input
            type="text"
            id="name"
            placeholder={
              language !== "en" ? en.Contacts.name : fr.Contacts.name
            }
            {...register("name")}
            className={
              errors.name
                ? "p-2 border bg-red-200  rounded-lg w-full "
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.name && (
            <p className="text-red-700 dark:text-red-300">
              {language !== "en"
                ? en.Contacts.nameError
                : fr.Contacts.nameError}
            </p>
          )}{" "}
        </GroupForm>

        <GroupForm>
          <label className="text-lg" htmlFor="email">
            {language !== "en"
              ? en.Contacts.labelEmail
              : fr.Contacts.labelEmail}
          </label>
          <input
            type="email"
            id="email"
            placeholder={
              language !== "en" ? en.Contacts.email : fr.Contacts.email
            }
            {...register("email")}
            className={
              errors.email
                ? "p-2 border bg-red-200 rounded-lg w-full"
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.email && (
            <p className="text-red-700 dark:text-red-300">
              {language !== "en"
                ? en.Contacts.emailError
                : fr.Contacts.emailError}
            </p>
          )}
        </GroupForm>
        <GroupForm>
          <label className=" text-lg" htmlFor="message">
            {language !== "en"
              ? en.Contacts.labelMessage
              : fr.Contacts.labelMessage}
          </label>
          <textarea
            id="message"
            placeholder={
              language !== "en" ? en.Contacts.message : fr.Contacts.message
            }
            {...register("message")}
            className={
              errors.message
                ? "p-2 border bg-red-200 rounded-lg w-full"
                : "p-2 border border-black rounded-lg w-full"
            }
          />
          {errors.message && (
            <p className="text-red-700 dark:text-red-300">
              {language !== "en"
                ? en.Contacts.nameError
                : fr.Contacts.nameError}
            </p>
          )}
        </GroupForm>
        <button
          type="submit"
          className="bg-lgButton active:opacity-70 h-12 w-24 text-white rounded-2xl hover:bg-lgElementSeparator dark:hover:bg-blElementSeparator"
        >
          {language !== "en" ? en.Contacts.button : fr.Contacts.button}
        </button>
        {error && (
          <p className="text-red-700 dark:text-red-300">
            {language !== "en" ? en.Contacts.error : fr.Contacts.error}
          </p>
        )}
        {success && (
          <p className="text-lgTextMin dark:text-blTextMin">
            {language !== "en" ? en.Contacts.success : fr.Contacts.success}
          </p>
        )}
      </form>
      <nav className="flex gap-x-3 flex-col items-center gap-y-4 sm:flex-row justify-center mt-16">
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
