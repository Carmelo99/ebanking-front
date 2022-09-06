import { useState } from "react";

interface PasswordServiceType {
  showText: boolean;
  changeTypeInput: (event: any) => void;
  onKeyDown: (event: any) => void;
  capsLockError: boolean;
}

export default function PasswordService(): PasswordServiceType {
  const [showText, setShowText] = useState<boolean>(false);
  const [capsLockError, setCapsLockError] = useState<boolean>(false);

  const changeTypeInput = (event: any) => {
    setShowText(!showText);
  };

  const onKeyDown = (keyEvent: any) => {
    if (keyEvent.getModifierState("CapsLock")) {
      setCapsLockError(true);
    } else {
      setCapsLockError(false);
    }
  };

  return { showText, changeTypeInput, capsLockError, onKeyDown };
}

export type { PasswordServiceType };