import React, { useEffect, useState } from "react";
import "./Profile.css";
import Rectangle18 from "../../assets/Rectangle19.png";
import { client } from "../client";
import { urlFor } from "../client";

const Profile = () => {
  const [prolist, setprolist] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((data) => setprolist(data));
  }, []);

  return (
    <section id="profile" className="profilepage">
      <div className="wrapper">
        <h1>What our students say?</h1>
        <div className="profileflex">
          {prolist.map((data2) => (
            <div className="profiles">
              <img src={urlFor(data2.image)} alt="img not found" />
              <div className="tabdiv">
                <h4>{data2.name}</h4>
                <p>{data2.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
