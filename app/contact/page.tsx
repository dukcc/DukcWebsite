"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiMiniClipboard } from "react-icons/hi2";
import LinkButton from "@/components/LinkButton";
import Status from "@/components/Status";

export default function Contact() {
  return (
    <div className="w-full overflow-hidden h-full flex bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <div className="flex flex-col max-[800px]:place-content-start gap-128 p-64 max-[800px]:p-32 h-full w-full overflow-y-scroll">
        <div className="flex flex-col gap-32 h-fit w-full">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0,
            }}
            className="flex justify-between"
          >
            <h2 className="text-2 font-medium">Contact</h2>
            <div className="max-[400px]:hidden flex justify-center items-center">
              <Status />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            className="text-body leading-[225%]"
          >
            {/** Want to work with me? Send me a message via Discord or Email. <br />
            UI or Website Design - I will create you a UI design in Figma for
            you to use. <br />
            Simple Website - I will create a website design and code it for you.
            <br />
          Payment is up-front and through PayPal. **/}
            I am currently at capacity with work. But if you want to reach out
            you can still contact me!
          </motion.p>
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            className="text-3 font-medium"
          >
            Discord
          </motion.h3>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            onClick={() => navigator.clipboard.writeText("dukkcc")}
            className="text-body w-fit hover:text-brand-blue ease-out duration-500"
          >
            Discord username: dukkcc
            <HiMiniClipboard className="inline ml-8" />
          </motion.button>
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            className="text-3 font-medium"
          >
            Email
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            className="text-body w-fit"
          >
            <LinkButton
              text="Email: hello@dukc.dev"
              link="mailto:hello@dukc.dev"
            />
          </motion.div>

          <motion.form
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
              duration: 0.2,
              delay: 0.2,
            }}
            className="flex flex-col gap-16"
            action="https://submit-form.com/MJTUBgv7"
          >
            <input type="hidden" name="_feedback.dark" value="true" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-white/5 border w-full border-stroke-2 focus:bg-fg-1-focus focus:outline-none shadow-fg rounded-in py-8 px-16 placeholder-text-1-subtle"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-white/5 border w-full border-stroke-2 focus:bg-fg-1-focus focus:outline-none duration-150 shadow-fg rounded-in py-8 px-16 placeholder-text-1-subtle"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="bg-white/5 border w-full h-[10rem] border-stroke-2 focus:bg-fg-1-focus focus:outline-none shadow-fg rounded-in py-8 px-16 placeholder-text-1-subtle min-h-[46px]"
            ></textarea>
            <button
              className="text-body border w-full h-[42px] shadow-fg flex items-center justify-center gap-6 px-24 rounded-in ease-out duration-150 enabled:hover:-translate-y-[2px] enabled:active:translate-y-6 disabled:cursor-not-allowed disabled:text-1-disabled bg-brand-blue/75 border-stroke-2 text-white enabled:hover:bg-brand-blue enabled:active:bg-brand-blue/50 disabled:bg-brand-blue/25"
              type="submit"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
      <Image
        src="/contact.png"
        alt="Contact image"
        width={1000}
        height={1000}
        loading="eager"
        className="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
      />
    </div>
  );
}
