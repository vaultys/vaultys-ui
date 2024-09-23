import React, { useContext, useRef, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { InputPassword } from "../InputPassword";

type UseModalShowReturnType = {
  show: boolean;
  setShow: (value: boolean) => void;
  onHide: () => void;
};

const useModalShow = (): UseModalShowReturnType => {
  const [show, setShow] = useState(false);

  const handleOnHide = () => {
    setShow(false);
  };

  return {
    show,
    setShow,
    onHide: handleOnHide,
  };
};

type ModalContextType = {
  show: (props: {
    title: string;
    message: string | JSX.Element;
    className?: string;
    acceptText?: string;
    declineText?: string;
    validationMessage?: string;
    placeholder?: string;
    type?: "password" | "confirm" | "validate" | "info";
  }) => Promise<string>;
};

type InputModalContextProviderProps = {
  children: React.ReactNode;
};

const InputModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const InputModalContextProvider: React.FC<InputModalContextProviderProps> = (props) => {
  const [content, setContent] = useState<{
    title: string;
    message: string | JSX.Element;
    className?: string;
    acceptText?: string;
    declineText?: string;
    validationMessage?: string;
    placeholder?: string;
    type?: "password" | "confirm" | "validate" | "info";
  } | null>();
  const [val, setVal] = useState<string>("");
  const [confirmationMessageInvalid, setConfirmationMessageInvalid] = useState<boolean>(false);
  const resolver = useRef<Function>();

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const handleShow = (props: {
    title: string;
    message: string | JSX.Element;
    className?: string;
    acceptText?: string;
    declineText?: string;
    validationMessage?: string;
    placeholder?: string;
    type?: "password" | "confirm" | "validate" | "info";
  }): Promise<string> => {
    setContent({
      ...props,
      className: props.className ?? "",
      acceptText: props.acceptText ?? "OK",
      declineText: props.declineText ?? "Cancel",
      type: props.type ?? "validate",
    });
    onOpen();
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const modalContext: ModalContextType = {
    show: handleShow,
  };

  const handleOk = () => {
    if (content?.type === "confirm") {
      if (val !== content.validationMessage) return setConfirmationMessageInvalid(true);
      else {
        setVal("");
        resolver.current && resolver.current(true);
        return onClose();
      }
    }
    resolver.current && resolver.current(content?.type === "validate" ? true : val);
    setVal("");
    onClose();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setVal("");
    onClose();
  };

  return (
    <InputModalContext.Provider value={modalContext}>
      {props.children}

      {content && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          backdrop="blur"
          className={content.className}
          classNames={{
            base: "bg-light dark:bg-dark text-black dark:text-white",
          }}
          placement="center"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col items-center">{content.title}</ModalHeader>
            <ModalBody className="items-center gap-8">
              <div>{content.message}</div>

              {content.type === "password" && (
                <InputPassword label="" testId="confirm-dialog-input" placeholder={content.placeholder} onChange={(value: string) => setVal(value)} value={val} />
              )}
              {content.type === "confirm" && (
                <Input
                  isInvalid={confirmationMessageInvalid}
                  data-test="confirm-dialog-input"
                  placeholder={content.placeholder}
                  onValueChange={(value: string) => setVal(value)}
                  value={val}
                  classNames={{
                    inputWrapper: "bg-light-secondary dark:bg-dark-secondary",
                  }}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="success" className="text-white" onPress={() => handleOk()} data-test="confirm-dialog-accept">
                <span className="text-ellipsis truncate ...">{content.acceptText}</span>
              </Button>
              {content.type !== "info" && (
                <Button color="danger" className="text-white" onPress={() => handleCancel()} data-test="confirm-dialog-deny">
                  <span className="text-ellipsis truncate ...">{content.declineText}</span>
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </InputModalContext.Provider>
  );
};

const useInputModalContext = (): ModalContextType => useContext(InputModalContext);

export { useModalShow, useInputModalContext, InputModalContextProvider };
