import { Link } from "react-router-dom";

import { todayText } from "../../data/today";

const Today = () => {
  const today = todayText[0];

  return (
    <section id="today">
      <div className="today__inner">
        <div className="today__thumb play__icon">
          <Link to={today.page}>
            <img src={today.img} alt={today.title} />
          </Link>
        </div>
        <div className="today__text">
          <p className="today">today!</p>
          <h3 className="title">
            <Link to={today.page}>{today.title}</Link>
          </h3>
          <p className="desc">{today.desc}</p>
          <div className="info">
            <span className="author">
              <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
            </span>
            <span className="date">{today.date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
