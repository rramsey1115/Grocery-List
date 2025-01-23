import { Button, Spinner } from "reactstrap";
import { deleteItemById } from "../../services/itemServices";
import { useState } from "react";
import "./List.css";

export const DeleteItemButton = ({ id, getAndSetAllItems }) => {
  const [loading, setLoading] = useState(false);

  const deleteClicked = async (id) => {
    setLoading(true);
    await deleteItemById(id);
    getAndSetAllItems();
    setLoading(false);
  }

  return !id || loading ? (
    <td>
      <Spinner />
    </td>
  ) : (
    <td>
      <Button
        id="delete-btn"
        color="danger"
        size="sm"
        value={id}
        onClick={(e) => {
          deleteClicked(e.target.value);
        }}
      >
        X
      </Button>
    </td>
  );
};
