import { Subject } from "rxjs";

const subject = new Subject();

export const cartService = {
  sendCartData: (count) => subject.next({ count }),
  clearCartData: () => subject.next(),
  getCartData: () => subject.asObservable(),
};
