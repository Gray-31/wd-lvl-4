const doinglist = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const marKasfinisheD = (index) => {
      all[index].completed = true;
    };
  
    const oveRdue = () => {
      return all.filter(
        (todo) => todo.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
  
    const duetoddAY = () => {
      return all.filter(
        (todo) => todo.dueDate === new Date().toLocaleDateString("en-CA")
      );
    };
  
    const DuElaterr = () => {
      return all.filter(
        (todo) => todo.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
    return {
      all,
      add,
      marKasfinisheD,
      oveRdue,
      duetoddAY,
      DuElaterr,
    };
  };
  
  module.exports = doinglist;