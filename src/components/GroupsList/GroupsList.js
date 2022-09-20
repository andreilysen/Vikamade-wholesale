import { useState, useEffect } from "react";
import * as APIfetch from "../../services/goods-API";

import "./GroupsList.scss";

const GoodsList = () => {
  const [groups, setGroups] = useState([]);
  // let filterGroup = [];

  useEffect(() => {
    APIfetch.getProductsList().then((allGroups) => {
      const parentGroup = allGroups.find(
        (group) => group.parent_group_id === null
      );
      const parentGroupId = parentGroup.id;
      // console.log("parentGroupId", parentGroupId);

      const filterGroup = allGroups.filter(
        (group) => group.parent_group_id === parentGroupId
      );
      setGroups(filterGroup);
      // console.log("filterGroup", filterGroup);
    });
  }, []);
  // console.log("filterGroup2", groups);

  return (
    groups.length > 0 && (
      <section className="container">
        <ul className="list">
          {groups.map((group) => {
            return (
              <li key={group.id} className="card">
                <div className="image">
                  <img src={group.image} alt="" />
                </div>
                <div>
                  <p className="name">{group.name}</p>
                  {/* <p>Price</p> */}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
};

export default GoodsList;
