const api = `http://localhost:5050/api`;

export const addItem = async (item) => {
  const response = await fetch(`${api}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to add item");
  }

  return response.json();
};

export const getAllItems = async () => {
  try {
    const response = await fetch(`${api}/items`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch items");
    }

    const items = await response.json();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const deleteItemById = async (id) => {
  if(!id) {
    console.log("No id provided");
    throw new Error("No id provided");
  }
  console.log("deleteItemById", id);

  try {
    const response = await fetch(`${api}/items/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error.error || `failed to delete item with id ${id}`);
      throw new Error(error.message || "failed to delete item");
    }
  } catch (err) {
    console.log(`Error deleting item with id: ${id}`);
    throw err;
  }
};

export const deleteAllItems = async () => {
  console.log("deleteAllItems");
  try {
    const response = await fetch(`${api}/items/delete`, {
      method: "DELETE"
    });

    if(!response.ok) {
      const error = await response.json();
      console.log("Error deleting all items", error.message)
      throw new Error(error.message || "Error deleting all items");
    }

    return response.json();
    
  } catch (err) {
    console.log(`Error deleting all items: `, err)
    throw err;
  }
};
