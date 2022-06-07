import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useVacationContext } from "../../Context/Provider";
import { ActivityCard } from "./ActivityCard/activitycard";
import { Price } from "../Price/price";
import { useState } from "react";

export const Activities = ({ render }) => {
  const [actOn, setActOn] = useState(false);
  const [activity, setActivity] = useState();

  const {
    fetchCity,
    state: { city },
  } = useVacationContext();

  const par = `/?city_in=${render[0].id}`;
  useEffect(() => {
    fetchCity(par);
    setActivity(city.data);
    console.log(city.data);
  }, []);

  return (
    <div className={styles.ActivitiesWrap}>
      {activity !== undefined && activity.length !== 0 && actOn == false ? (
        <Price
          id={render}
          giveActivity={activity}
          activityOn={() => setActOn(!actOn)}
        />
      ) : (
        ""
      )}
      {activity !== undefined && actOn == true
        ? activity.map((element, i) => (
            <ActivityCard info={element} key={i} waiting={100 * i} />
          ))
        : ""}
    </div>
  );
};