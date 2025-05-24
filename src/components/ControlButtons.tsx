import "../styles/selectTicPage.css";

interface ControlButtonsProps {
  className?: string;
  onNext: () => void;
  onCancel: () => void;
  nextRoute?: string;
  cancelRoute?: string;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({ className, onNext, onCancel, nextRoute, cancelRoute}) => {
  return (
    <div className={`control-buttons ${className || ""}`}>
      <button className="next" onClick={onNext}>{nextRoute}</button>
      <button className="cancel" onClick={onCancel}>{cancelRoute}</button>
    </div>
  )
}
