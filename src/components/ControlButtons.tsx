import "../styles/selectTicPage.css";

interface ControlButtonsProps {
  onNext: () => void;
  onCancel: () => void;
  nextRoute?: string;
  cancelRoute?: string;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({ onNext, onCancel, nextRoute, cancelRoute}) => {
  return (
    <div className="control-buttons">
      <button className="next" onClick={onNext}>{nextRoute}</button>
      <button className="cancel" onClick={onCancel}>{cancelRoute}</button>
    </div>
  )
}
