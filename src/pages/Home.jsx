import Main from "../components/section/Main";

import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
/* import Webd from "../components/contents/Webd";
import Website from "../components/contents/Website";
import Gsap from "../components/contents/Gsap";
import Portfolio from "../components/contents/Portfolio";
import Youtube from "../components/contents/Youtube"; */
import VideoSlider from "../components/videos/VideoSlider";

import { webdText } from "../data/webd";

const Home = function () {
  return (
    <Main
      title="웹스토리보이 유튜브"
      description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다."
    >
      <Today />
      <Developer />
      <VideoSlider
        videos={webdText}
        title="😮 웹디자인기능사 준비는 이걸로!"
        id="webd"
      />
    </Main>
  );
};

export default Home;
