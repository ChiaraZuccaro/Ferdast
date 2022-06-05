import styles from "./styles.module.scss";

import Link from "next/link";

export const MediumCard = (props) => {
  return (
    <div className={`${styles.mediumCardContainer} `}>
      <div className={styles.imgContainer}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={`${styles.description}`}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        <Link href={`/country/${props.name}`}>
          <a className={styles.btn}>scopri viaggi</a>
        </Link>
      </div>
    </div>
  );
};
