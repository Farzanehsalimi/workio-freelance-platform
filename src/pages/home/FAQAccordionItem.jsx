import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function FAQAccordionItem({
  number,
  title,
  content,
  isOpen,
  onClick,
  className,
}) {
  return (
    <div
      className={`rounded-t-lg w-[300px] sm:w-[500px] md:w-[700px] ${className}`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-2 px-4 md:py-5 md:px-8 text-right"
      >
        <div className="flex items-center gap-2 md:gap-6">
          <span className="text-xl md:text-3xl font-bold text-secondary-500">
            {number}
          </span>
          <span className="text-sm md:text-xl font-bold text-secondary-900">
            {title}
          </span>
        </div>
        <span className="flex-shrink-0">
          {isOpen ? (
            <XMarkIcon className="w-5 h-5 p-0.5 md:w-9 md:h-9 md:p-2 duration-500 text-secondary-0 bg-secondary-900 rounded-full" />
          ) : (
            <PlusIcon className="w-5 h-5 md:w-9 md:h-9 text-secondary-600 md:p-2 duration-500" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 md:px-16 pb-6 text-base md:text-lg text-secondary-500 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
