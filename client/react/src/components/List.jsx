import { Spinner, Table } from "reactstrap";
import "./List.css";
import { DeleteItemButton } from "./DeleteItemButton";

export const List = ({ getAndSetAllItems, items }) => {
  return !items ? (
    <Spinner />
  ) : (
    <section id="list-container">
      <Table dark hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.amount}</td>
                <DeleteItemButton
                  id={item._id}
                  getAndSetAllItems={getAndSetAllItems}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
