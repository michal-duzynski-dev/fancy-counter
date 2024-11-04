import { useEffect } from "react";

type CounterButtonFunction = { buttonFunction: "add" | "subtract" };

type CounterButtonProps = {
  buttonFunction: CounterButtonFunction;
  onClick: () => void;
};

export default function CounterButton({
  buttonFunction,
  onClick,
}: CounterButtonProps) {
  const buttonIcon = (() => {
    switch (buttonFunction.buttonFunction) {
      case "add":
        return "+";
      case "subtract":
        return "-";
      default:
        return "";
    }
  })();

  return (
    <div onClick={onClick} className="count-btn count-btn-icon">
      {buttonIcon}
    </div>
  );
}
