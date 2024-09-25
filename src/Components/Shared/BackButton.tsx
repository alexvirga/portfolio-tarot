import "./styles.css";

interface BackButtonProps {
  onBack: () => void;
}

export const BackButton = ({ onBack }: BackButtonProps) => {
  return (
    <button className="back-button" onClick={onBack}>
      Back
    </button>
  );
};
