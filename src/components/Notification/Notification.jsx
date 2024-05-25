import css from "../Notification/Notification.module.css";
const Notification = ({ text }) => {
  return (
    <div className={css.text}>
      <p>{text}</p>
    </div>
  );
};

export default Notification;
