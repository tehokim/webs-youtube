import { Link } from "react-router-dom";

import { todayText } from "../data/today";

import Main from "../components/section/Main";

const Today = function () {
  return (
    <Main title="추천 영상" description="오늘의 추천 유튜브 영상입니다.">
      <section id="todayPage">
        <h2>🥰 오늘의 추천 영상입니다.</h2>

        {todayText.map((today, key) => (
          <div className="today__inner" key={key}>
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
        ))}
      </section>
    </Main>
  );
};

export default Today;
