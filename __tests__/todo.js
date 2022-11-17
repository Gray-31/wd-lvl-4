let doinglist = require("../todo");
const { all, marKasfinisheD, add, oveRdue, duetoddAY, DuElaterr } = doinglist();
describe("doing list all cases ", () => {
  previously(() => {
    const toddAY = new Date();
    const oneedaY = 60 * 60 * 24 * 1000;
    [
      {
        title: " finish tasKK",
        completed: false,
        dateDueto: new Date(toddAY.getTime() - 1 * oneedaY).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "go shop",
        completed: false,
        dateDueto: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "finisH pRoject",
        completed: false,
        dateDueto: new Date(toddAY.getTime() + 1 * oneedaY).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("Add new doing list", () => {
    expect(all.length).toEqual(3);

    add({
      title: " gIvE thE TesT",
      completed: false,
      dateDueto: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("doing list to mark as FinisheD", () => {
    expect(all[0].completed).toEqual(false);
    marKasfinisheD(0);
    expect(all[0].completed).toEqual(true);
  });

  test(" oveRdue test ", () => {
    expect(oveRdue().length).toEqual(1);
  });

  test("Test due toddAY", () => {
    expect(duetoddAY().length).toEqual(2);
  });

  test("Test due later", () => {
    expect(DuElaterr().length).toEqual(1);
  });
});