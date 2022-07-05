import React from "react";
import { shallow } from "enzyme";
import { Sidebar } from "../../../src/components/Sidebar";

describe("Sidebar component", () => {
  it("should render the Sidebar component correctly", () => {
    const props = {
      categoriesData: [
        {
          name: "Beverages",
          key: "beverages",
          description:
            "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          enabled: true,
          order: 3,
          imageUrl: "/static/images/category/beverages.png",
          id: "5b675e5e5936635728f9fc30",
        },
        {
          name: "Bakery Cakes and Dairy",
          key: "bakery-cakes-dairy",
          description:
            "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          enabled: true,
          order: 2,
          imageUrl: "/static/images/category/bakery.png",
          id: "5b6899123d1a866534f516de",
        },
      ],
      handleCategorySelection: jest.fn(),
    };
    const component = shallow(<Sidebar {...props} debug />);
    expect(component).toMatchSnapshot();
  });
});
