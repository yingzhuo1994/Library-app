import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { LibraryServices } from "./../LibraryServices";
import { Heros } from "./../Heros";

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
