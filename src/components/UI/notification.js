import classes from "./notification.module.css";

const Notification = (props) => {
  const { status, title, message } = props.notification;
  let specialClasses = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  // const cssClasses = `${classes.notification}`;


  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
      {/* <h2>sending</h2>
      <p>success</p>  */}
      
    </section>
  );
};

export default Notification;
