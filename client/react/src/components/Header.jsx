import { Button, Spinner } from "reactstrap";
import "./Header.css";
import { deleteAllItems } from "../../services/itemServices";
import { useState } from "react";

export const Header = ({ getAndSetAllItems, items }) => {
  const [loading, setLoading] = useState(false);

  const clearAllItems = async () => {
    setLoading(true);
    await deleteAllItems();
    await getAndSetAllItems();
    setLoading(false);
  };

  return (
    <section id="main-header">
      <h1>Grocery List</h1>
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <div id="button-div">
          <Button
            id="clear-btn"
            color="primary"
            disabled={items.length == 0 ? true : false}
            onClick={clearAllItems}
          >
            Clear All
          </Button>
        </div>
      )}
    </section>
  );
};
