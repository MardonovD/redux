const Redux = require("Redux");

// bankka borish uch xil kuris=nishi mavjud
//1.ruyxatdan utasanmi
//2.pul olish
//3.delete uchirish accountini

const ruyxatUt = (name, pul) => {
  return {
    type: "REGISTER",
    padname: {
      name: name,
      pul: pul,
    },
  };
};

const pulOlish = (name, money) => {
  return {
    type: "CLAIM",
    padname: {
      name: name,
      money: money,
    },
  };
};

const deleteAccount = (name) => {
  return {
    type: "DELETE",
    padname: {
      name: name,
    },
  };
};

const addFunc = (history = [], form) => {
  if (form.type === "REGISTER") {
    return (history = [...history, form]);
  }
  return history;
};
