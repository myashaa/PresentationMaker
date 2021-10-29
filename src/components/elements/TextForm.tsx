import "./Form.styles.css";
import { Spacer } from "../Spacer";

type TextFormProps = {};

export function TextForm({}: TextFormProps) {
  return (
    <div className="form">
      <div className="header-form header-form--title">
        <span className="material-icons header-form-icon">title</span>
        <span className="header-form-title">Текст</span>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Высота</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Ширина</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Отступ сверху</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Отступ слева</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Рамка</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--withoutText">
        <select className="header-form-select">
          <option>точечная</option>
          <option>пунктирная</option>
          <option>сплошная</option>
          <option>двойная</option>
          <option>внутренняя</option>
          <option>внешняя</option>
        </select>
      </div>
      <div className="header-form header-form--withoutText">
        <select className="header-form-select">
          <option>красный</option>
          <option>оранжевый</option>
          <option>желтый</option>
          <option>зеленый</option>
          <option>голубой</option>
          <option>синий</option>
          <option>фиолетовый</option>
          <option>розовый</option>
          <option>белый</option>
          <option>черный</option>
        </select>
      </div>
      <div className="header-form header-form--content line">
        <span className="header-form-title">Заливка</span>
        <select className="header-form-select">
          <option>красный</option>
          <option>оранжевый</option>
          <option>желтый</option>
          <option>зеленый</option>
          <option>голубой</option>
          <option>синий</option>
          <option>фиолетовый</option>
          <option>розовый</option>
          <option>белый</option>
          <option>черный</option>
        </select>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Шрифт</span>
        <select className="header-form-select">
          <option>Arial</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Размер</span>
        <div className="header-form-size">
          <input className="header-form-input" type="number" />
          <Spacer width={5} />
          <span className="header-form-title">px</span>
        </div>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Цвет</span>
        <select className="header-form-select">
          <option>красный</option>
          <option>оранжевый</option>
          <option>желтый</option>
          <option>зеленый</option>
          <option>голубой</option>
          <option>синий</option>
          <option>фиолетовый</option>
          <option>розовый</option>
          <option>белый</option>
          <option>черный</option>
        </select>
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Жирный</span>
        <input className="header-form-checkbox" type="checkbox" />
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Подчеркнутый</span>
        <input className="header-form-checkbox" type="checkbox" />
      </div>
      <div className="header-form header-form--content">
        <span className="header-form-title">Курсивный</span>
        <input className="header-form-checkbox" type="checkbox" />
      </div>
    </div>
  );
}
