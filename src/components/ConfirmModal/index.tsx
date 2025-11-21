import React, { ReactElement, useContext, useRef, useState, useMemo } from "react";
import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";

type ConfirmModalContextType = {
  show: (props: {
    header: string | ReactElement;
    customContent?: ReactElement;
    alert: string;
    alertDescription?: string;
    cancelText?: string;
    acceptText?: string;
    cancelIcon?: ReactElement;
    acceptIcon?: ReactElement;
    color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
  }) => Promise<boolean>;
};

const ConfirmModalContext = React.createContext<ConfirmModalContextType>({} as ConfirmModalContextType);

function ConfirmModalContextProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<{
    header: string | ReactElement;
    customContent?: ReactElement;
    alert: string;
    alertDescription?: string;
    cancelText?: string;
    acceptText?: string;
    cancelIcon?: ReactElement;
    acceptIcon?: ReactElement;
    color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
  } | null>(null);

  const resolver = useRef<Function | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleShow = (props: {
    header: string | ReactElement;
    customContent?: ReactElement;
    alert: string;
    alertDescription?: string;
    cancelText?: string;
    acceptText?: string;
    cancelIcon?: ReactElement;
    acceptIcon?: ReactElement;
    color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
  }): Promise<boolean> => {
    setContent({
      ...props,
      cancelText: props.cancelText ?? "Cancel",
      acceptText: props.acceptText ?? "Confirm",
      color: props.color ?? "default",
    });
    onOpen();
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleAccept = () => {
    resolver.current && resolver.current(true);
    onClose();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onClose();
  };

  const modalContext = useMemo<ConfirmModalContextType>(
    () => ({
      show: handleShow,
    }),
    []
  );

  // Color mappings for alert box styling
  const getAlertStyles = (color: string) => {
    const styles = {
      default: {
        bg: "",
        text: "text-default-700",
        border: "border-0!",
      },
      success: {
        bg: "bg-success-50",
        text: "text-success-700",
        border: "border-success-200",
      },
      warning: {
        bg: "bg-warning-50",
        text: "text-warning-700",
        border: "border-warning-200",
      },
      danger: {
        bg: "bg-danger-50",
        text: "text-danger-700",
        border: "border-danger-200",
      },
      primary: {
        bg: "bg-primary-50",
        text: "text-primary-700",
        border: "border-primary-200",
      },
      secondary: {
        bg: "bg-secondary-50",
        text: "text-secondary-700",
        border: "border-secondary-200",
      },
      info: {
        bg: "bg-focus-50",
        text: "text-focus-700",
        border: "border-focus-200",
      },
    };

    return styles[color as keyof typeof styles] || styles.default;
  };

  // Get button color, handling special case for "info"
  const getButtonColor = (color: string) => {
    return color === "info" ? "default" : color;
  };

  return (
    <ConfirmModalContext.Provider value={modalContext}>
      {children}

      {content && (
        <Modal
          isOpen={isOpen}
          onClose={handleCancel}
          backdrop="blur"
          classNames={{
            base: "bg-background",
            header: "border-b border-divider",
            body: "py-6",
            footer: "border-t border-divider",
          }}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              {typeof content.header === "string" ? <h3 className="text-xl font-semibold">{content.header}</h3> : content.header}
            </ModalHeader>

            <ModalBody>
              {content.customContent && (
                <>
                  {content.customContent}
                  <Divider className="my-4" />
                </>
              )}

              {/* Styled alert box similar to AdminUsers.tsx warning box */}
              {content.alert && (
                <div
                  className={`${getAlertStyles(content.color ?? "default").bg} ${getAlertStyles(content.color ?? "default").text} p-4 rounded-lg border ${
                    getAlertStyles(content.color ?? "primary").border
                  }`}
                >
                  <p className="font-medium">{content.alert}</p>
                  {content.alertDescription && <p className="mt-1 text-sm">{content.alertDescription}</p>}
                </div>
              )}
            </ModalBody>

            <ModalFooter>
              <Button variant="flat" color="default" onPress={handleCancel} startContent={content.cancelIcon} data-test="confirm-dialog-deny">
                {content.cancelText}
              </Button>
              <Button
                color={getButtonColor(content.color ?? "primary") as "default" | "success" | "warning" | "danger" | "primary" | "secondary"}
                onPress={handleAccept}
                startContent={content.acceptIcon}
                data-test="confirm-dialog-accept"
                className={`${content.color === "info" && "bg-modern-blue"}`}
              >
                {content.acceptText}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </ConfirmModalContext.Provider>
  );
}

const useConfirmModal = (): ConfirmModalContextType => useContext(ConfirmModalContext);
export { useConfirmModal, ConfirmModalContextProvider };
