export default function ResetButton({
  resetFunction,
}: {
  resetFunction: () => void;
}) {
  return (
    <div onClick={resetFunction} className="reset-btn reset-btn-icon">
      {"<"}
    </div>
  );
}
