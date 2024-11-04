import CounterButton from "./CounterButton";
type ButtonContainerProps = {
  addFunction: () => void;
  subtractFunction: () => void;
};

export default function ButtonContainer({
  addFunction,
  subtractFunction,
}: ButtonContainerProps) {
  return (
    <div className="button-container">
      <CounterButton
        buttonFunction={{
          buttonFunction: "subtract",
        }}
        onClick={subtractFunction}
      />
      <CounterButton
        buttonFunction={{
          buttonFunction: "add",
        }}
        onClick={addFunction}
      />
    </div>
  );
}
