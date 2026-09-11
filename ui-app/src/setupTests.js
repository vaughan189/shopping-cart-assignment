import { configure } from "enzyme";
import enableHooks from "jest-react-hooks-shallow";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
enableHooks(jest, { dontMockByDefault: true });
