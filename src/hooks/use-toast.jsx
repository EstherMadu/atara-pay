import React, { createContext, useContext, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeoutFn } from "react-use";
import { createPortal } from "react-dom";
import {
  HiCheck,
  HiExclamationCircle,
  HiQuestionMarkCircle,
  HiX,
} from "react-icons/hi";

const ToastContext = createContext({
  success: (message, timeout) => {},
  error: (message, timeout) => {},
  warning: (message, timeout) => {},
  info: (message, timeout) => {},
  default: (message, timeout) => {},
});

const generateUEID = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);
  return first + second;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const open = ({ message, type = "success", timeout = 5000 }) => {
    setToasts((prev) => [
      { id: generateUEID(), message, type, timeout },
      ...prev,
    ]);
  };

  const close = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const success = (message, timeout = 5000) => {
    open({ message, type: "success", timeout });
  };

  const error = (message, timeout = 5000) => {
    open({ message, type: "error", timeout });
  };

  const warning = (message, timeout = 5000) => {
    open({ message, type: "warning", timeout });
  };

  const info = (message, timeout = 5000) => {
    open({ message, type: "info", timeout });
  };

  const _default = (message, timeout = 5000) => {
    open({ message, type: "default", timeout });
  };

  const value = { success, error, warning, info, default: _default };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className="p-4 md:p-8 space-y-3 w-max max-w-md fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[999]">
          <AnimatePresence>
            {toasts.reverse().map((toast) => (
              <Toast
                key={toast.id}
                onClose={() => close(toast.id)}
                toast={toast}
              />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const Toast = ({ toast, onClose }) => {
  useTimeoutFn(onClose, toast.timeout);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 1 }}
      className={classNames(
        "px-4 py-3 rounded-xl flex items-start w-full",
        { "bg-green-600 text-white": toast.type === "success" },
        { "bg-red-600 text-white": toast.type === "error" },
        { "bg-orange-600 text-white": toast.type === "warning" },
        { "bg-blue-600 text-white": toast.type === "info" },
        { "bg-white shadow text-gray-800": toast.type === "default" }
      )}
    >
      <div className="mt-[2px] mr-3">
        {toast.type === "success" && <HiCheck size="20" />}
        {toast.type === "error" && <HiX size="20" />}
        {toast.type === "warning" && <HiExclamationCircle size="20" />}
        {toast.type === "info" && <HiQuestionMarkCircle size="20" />}
      </div>
      <p>{toast.message}</p>
    </motion.div>
  );
};
