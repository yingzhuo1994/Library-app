import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { LibraryServices } from "./components/LibraryServices";
import { Heros } from "./components/Heros";

export const HomePage = () => {
  return (
    <div>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  );
};
