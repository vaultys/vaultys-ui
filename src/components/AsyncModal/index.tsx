import React, { useContext, useRef, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
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
    type?: "password" | "confirm" | "validate" | "info";
  }) => Promise<string>;
};

type InputModalContextProviderProps = {
  children: React.ReactNode;
};

const InputModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const InputModalContextProvider: React.FC<InputModalContextProviderProps> = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [content, setContent] = useState<{
    title: string;
    message: string | JSX.Element;
    className?: string;
    acceptText?: string;
    declineText?: string;
    validationMessage?: string;
    type?: "password" | "confirm" | "validate" | "info";
  } | null>();
  const [val, setVal] = useState<string>("");
  const [confirmationMessageInvalid, setConfirmationMessageInvalid] = useState<boolean>(false);
  const resolver = useRef<Function>();

  const handleShow = (props: {
    title: string;
    message: string | JSX.Element;
    className?: string;
    acceptText?: string;
    declineText?: string;
    validationMessage?: string;
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
            base: "vui-bg-light dark:vui-bg-dark vui-text-black dark:vui-text-white",
          }}
        >
          <ModalContent>
            <ModalHeader className="vui-flex vui-flex-col vui-items-center">{content.title}</ModalHeader>
            <ModalBody className="vui-items-center vui-gap-8">
              <div>{content.message}</div>

              {content.type === "password" && (
                <InputPassword
                  label=""
                  testId="confirm-dialog-input"
                  placeholder="Type here to validate"
                  onChange={(value: string) => setVal(value)}
                  value={val}
                  color="vui-bg-light-secondary dark:vui-bg-dark-secondary"
                />
              )}
              {content.type === "confirm" && (
                <Input
                  isInvalid={confirmationMessageInvalid}
                  data-test="confirm-dialog-input"
                  placeholder="Type here to validate"
                  onValueChange={(value: string) => setVal(value)}
                  value={val}
                  classNames={{
                    inputWrapper: "vui-bg-light-secondary dark:vui-bg-dark-secondary",
                  }}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="success" className="vui-text-white" onPress={() => handleOk()} data-test="confirm-dialog-accept">
                <span className="vui-text-ellipsis vui-truncate ...">{content.acceptText}</span>
              </Button>
              {content.type !== "info" && (
                <Button color="danger" className="vui-text-white" onPress={() => handleCancel()} data-test="confirm-dialog-deny">
                  <span className="vui-text-ellipsis vui-truncate ...">{content.declineText}</span>
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
