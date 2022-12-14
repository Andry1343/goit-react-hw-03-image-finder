import style from '../button/Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={style.buttonDiv}>
      <button type="button" className={style.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
