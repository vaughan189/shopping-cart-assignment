import React from "react";
import { shallow } from "enzyme";
import { Carousal, CarouselItem } from "../../../src/components/Carousel";

describe("Carousel component", () => {
  it("should render the Carousel component correctly", () => {
    const bannerData = [
      {
        bannerImageUrl: "/static/images/offers/offer1.jpg",
        bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        isActive: true,
        order: 1,
        id: "5b6c38156cb7d770b7010ccc",
      },
      {
        bannerImageUrl: "/static/images/offers/offer2.jpg",
        bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        isActive: true,
        order: 2,
        id: "5b6c38336cb7d770b7010ccd",
      },
    ];
    const component = shallow(<Carousal bannerData={bannerData} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render each CarouselItem component correctly", () => {
    const bannerData = {
      bannerImageUrl: "/static/images/offers/offer2.jpg",
      bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
      isActive: true,
      order: 2,
      id: "5b6c38336cb7d770b7010ccd",
    };
    const component = shallow(
      <CarouselItem
        bannerImageUrl={bannerData.bannerImageUrl}
        bannerImageAlt={bannerData.bannerImageAlt}
        debug
      />
    );
    expect(component).toMatchSnapshot();
  });
});
