jest.setMock("./data", [
  {
    name: "George Michael",
    phone: "0777777771"
  },
  {
    name: "John Smith",
    phone: "0777777772"
  },
  {
    name: "Sue Perkins",
    phone: "0777777773"
  },
  {
    name: "Tim Cook",
    phone: "077777774"
  }
]);

const getResults = require("./getResults").default;
const dataSet = require("./data");
describe("getResults", () => {
  it("should return all results when search str is empty or undefined", () => {
    expect(getResults()).toEqual(dataSet);
    expect(getResults("")).toEqual(dataSet);
  });

  it("should return the filtered data according to case-insensitive partial name match", () => {
    expect(getResults("sue")[0].name).toEqual("Sue Perkins");
    expect(getResults("i").length).toEqual(4);
    expect(getResults("o").length).toEqual(3);
    expect(getResults("**unmatched string**").length).toEqual(0);
  });
});
