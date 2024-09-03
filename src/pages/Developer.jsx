import { Link } from "react-router-dom";

import { developerText } from "../data/developer";

import Main from "../components/section/Main";

const Developer = function () {
  return (
    <Main title="추천 개발자" description="오늘의 추천 개발자 유튜버입니다.">
      <section id="devloperPage">
        <h2>🥰 오늘의 추천 개발자입니다.</h2>
        <div className="developer__inner">
          {developerText.map((dev, key) => (
            <div className="developer" key={key}>
              <div className="developer__img play__icon">
                <Link to={`/channel/${dev.channelId}`}>
                  <img src={dev.img} alt={dev.name} />
                </Link>
              </div>
              <div className="developer__info">
                <Link to={`/channel/${dev.channelId}`}>{dev.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Developer;
