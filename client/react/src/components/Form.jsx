import { useState } from "react";

import "./Form.css";
import { Button, Spinner } from "reactstrap";
import { addItem } from "../../services/itemServices";

export const Form = ({ getAndSetAllItems, items }) => {
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    details: "",
    amount: 1,
  });

  const submitForm = async () => {
    setLoading(true);
    await addItem(newItem);
    setNewItem({
      name: "",
      details: "",
      amount: 1,
    });
    getAndSetAllItems();
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section id="form-container">
      <h3 id="form-heading">Add Item</h3>
      <form id="form">
        <fieldset>
          <label htmlFor="item-name">
            Name:
            <input
              type="text"
              id="item-name"
              maxLength={12}
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="item-description">
            Description:
            <input
              type="text"
              id="item-description"
              value={newItem.details}
              maxLength={12}
              onChange={(e) =>
                setNewItem({ ...newItem, details: e.target.value })
              }
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="item-amount">
            Amount:
            <input
              type="number"
              id="item-amount"
              value={newItem.amount}
              max={100}
              min={1}
              required
              onChange={(e) =>
                setNewItem({ ...newItem, amount: parseInt(e.target.value) })
              }
            />
          </label>
        </fieldset>
        <fieldset>
          <Button
            id="add-item-btn"
            color="success"
            onClick={(e) => {
              e.preventDefault;
              submitForm();
            }}
          >
            Add
          </Button>
        </fieldset>
      </form>
    </section>
  );
};
