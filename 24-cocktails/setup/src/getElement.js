const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  console.log(element);
  throw new Error("no element selected");
};

export default getElement;
