import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes.address}>
      <address>Address: Valletta, Malta</address>
      <p>
        Our comfort specialists are experts at providing the information you
        need to make sound HVAC decisions. When we come to your home or business
        to perform services, you can count on us to deliver not only the
        expertise you need, but also the fast, courteous treatment you deserve.
        Whether on a repair or maintenance call, we will explain the process,
        let you know your options and detail the costs involved so you can make
        the best decision possible.
      </p>
    </div>
  );
};

export default Address;
