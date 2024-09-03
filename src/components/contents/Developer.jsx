import { Link } from "react-router-dom";

import { developerText } from "../../data/developer";

const Developer = () => {
  return (
    <section id="developer">
      <h2>😪 추천 개발자를 소개합니다.</h2>
      <div className="developer__inner overflow">
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
  );
};

export default Developer;
