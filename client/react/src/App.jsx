
import { useEffect, useState } from 'react';
import { getAllItems } from '../services/itemServices';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from 'reactstrap';

export const App = () => {
  const [items, setItems] = useState([])

  const getAndSetAllItems = async () => {
    const data = await getAllItems();
    console.log("data: ", data)
    setItems(data);
  };

  useEffect(() => {
    getAndSetAllItems();
  }, [])

  return !items ? <Spinner/> : (
    <section id='main-section'>
      <Header getAndSetAllItems={getAndSetAllItems} items={items}/>
      <List getAndSetAllItems={getAndSetAllItems} items={items}/>
      <Form getAndSetAllItems={getAndSetAllItems} items={items} />
    </section>
  );
}
