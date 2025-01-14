import { Flow } from "@/icons/flow";
import { Intellisense } from "@/icons/intellisense";
import { Keyboard } from "@/icons/keyboard";
import { MagicBranch } from "@/icons/magic-branch";
import { Prebuilds } from "@/icons/prebuilds";
import { Preview } from "@/icons/preview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    icon: Prebuilds,
    title: "Text1",
    text: "lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Intellisense,
    title: "Text2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Flow,
    title: "Text 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: MagicBranch,
    title: "Text 4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Keyboard,
    title: "Text 5",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Preview,
    title: "Text 6",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const MoreFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[120rem] grid-cols-3 gap-40 py-96"
    >
      {content.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
            <Icon className="h-12 w-12" />
          </span>
          <h3 className="mb-2 text-xl text-white">{title}</h3>
          <p className="text-md">{text}</p>
        </div>
      ))}
    </motion.section>
  );
};
