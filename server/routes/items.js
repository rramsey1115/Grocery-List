import Item from "../models/itemModel.js";

const items = (app) => {
  app
    .route("/api/items")
    .post(async (req, res) => {
      const { name, details, amount } = req.body;

      // make sure required fields are present
      if (!name || !amount) {
        res.send("missing required fields: name and amount");
        return;
      }

      // use provided properties to make new Item object
      const newItem = new Item({ name, details, amount });

      try {
        const item = await newItem.save();
        res.status(200).json({
          _id: item.id,
          name: item.name,
          details: item.details,
          amount: item.amount,
        });
      } catch (err) {
        console.log("error in .post() saving item", err);
        res.send("There was an error saving item");
      }
    }) // end of post request

    .get(async (req, res) => {
      try {
        const items = await Item.find({});
        if (!items) {
          res.json({});
          return;
        }
        const formattedData = items.map((item) => {
          return {
            _id: item.id,
            name: item.name,
            details: item.details,
            amount: item.amount,
          };
        });
        res.status(200).json(formattedData);
        return;
      } catch (err) {
        console.log("error getting items:", err);
        res.send("error getting items");
      }
    }); // end of get request

  app.route("/api/items/delete").delete(async (req, res) => {
    try {
      await Item.deleteMany({});

      res.status(200).json({
        message: "All items have been deleted successfully",
      });
    } catch (err) {
      console.log(`Error deleting all items: `, err);
      res.status(500).send("Error deleting items");
    }
  });

  app.route("/api/items/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      console.log("No id found");
    }

    try {
      const itemToDelete = await Item.findByIdAndDelete(id);

      if (!itemToDelete) {
        return res.status(404).json({ message: "Item not found" });
      }

      res.status(200).json({
        message: `Item with id ${id} has been deleted`,
        item: itemToDelete,
      });
    } catch (err) {
      console.log("Error deleting by id", err);
      res.status(500).send("Error deleting item by id");
    }
  }); // end of delete request
};

export default items;
