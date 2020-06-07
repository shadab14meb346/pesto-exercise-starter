function updateInventory(currentInventory, inventoryToAdd) {

  let createInventoryMap = currentInventory => {
    let inventoryMap = new Map();
    currentInventory.forEach(item => {
      const itemName = item[1];
      const itemQuantity = item[0];
      inventoryMap.set(itemName, itemQuantity);
    });
    return inventoryMap;
  }
  let addItemsToInventoryMap = (inventoryMap, inventoryToAdd) => {
    inventoryToAdd.forEach(item => {
      const itemName = item[1];
      const itemQuantity = item[0];
      if (inventoryMap.has(itemName)) {
        let currentQuantity = inventoryMap.get(itemName);
        let newQuantity = currentQuantity + itemQuantity;
        inventoryMap.set(itemName, newQuantity);
      } else {
        inventoryMap.set(itemName, itemQuantity);
      }
    });
    return inventoryMap;
  };
  let generateInventoryArray = inventoryMap => {
    let inventoryArray = [];
    for (let item of inventoryMap) {
      inventoryArray.push(item.reverse());
    }
    return inventoryArray;
  }
  let sortAlphabetically = (item1, item2) => {
    if (item2[1] < item1[1]) return 1;
    if (item2[1] > item1[1]) return -1;
    return 0
  }
  let currentInventoryMap = createInventoryMap(currentInventory);
  let updatedInventoryMap = addItemsToInventoryMap(currentInventoryMap, inventoryToAdd);
  let updatedInventory = generateInventoryArray(updatedInventoryMap);
  return updatedInventory.sort(sortAlphabetically);
}

export {
  updateInventory,
};