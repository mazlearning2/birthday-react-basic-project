import React, { useState } from "react";
import data from "../../data/data";
import "./Card.css";

const Card = (props) => {
    const [user, setUser] = useState(data);

    const clearUserHandler = () => {
        setUser([]);
    };

    return (
        <section className="card">
            <h1 className="card-title">امروز تولد {user.length} نفر هست</h1>
            <div className="card-content">
                {user.map((item) => {
                    return (
                        <article key={item.id} className="card-content-item">
                            <div className="item-image">
                                <img src={item.avatar} alt="" />
                            </div>
                            <h2 className="item-name-year">
                                <span className="name">{item.fullName}</span>
                                <span className="year">{item.age} سال</span>
                            </h2>
                        </article>
                    );
                })}
            </div>
            <button className="card-button" onClick={clearUserHandler}>پاک کردن همه</button>
        </section>
    );
};

export default Card;
