import CompAxiosCall from "./CompAxiosCall";
import CompRole from "./CompRole";
import CompUserEvent from "./CompUserEvent";
import CompVariant from "./CompVariant";
import SampleCompRTL from "./SampleCompRTL";
import ShowHide from "./ShowHide";

function App() {
  return (
    <>
      <SampleCompRTL />
      <ShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
