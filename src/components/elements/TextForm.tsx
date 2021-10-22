import "./TextForm.styles.css";

type TextFormProps = {};

export function TextForm({}: TextFormProps) {
  return (
    <div className="form">
      <div className="header-form">
        <span className="material-icons icon">title</span>
        <span className="header-form-title">Текст</span>
      </div>
    </div>
  );
}
