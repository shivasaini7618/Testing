import './App.css';
import './components/Item'
import './components/ItemDate';
import Card from './components/Card';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response =[ {
    ItmeName: "Nirma",
    ItemDate:"23",
    ItmeMonth: "June",
    ItmeYear:"2003"
  },
  {
    ItmeName: "Nirma2",
    ItemDate:"233",
    ItmeMonth: "June2",
    ItmeYear:"2004"
  },
  {
    ItmeName: "Nirma3",
    ItemDate:"233",
    ItmeMonth: "June3",
    ItmeYear:"2005"
  }]
  return (
    <div>
      <Card>
      <ItemDate day = {response[0].ItemDate} month = {response[0].ItmeMonth} year = {response[0].ItmeYear}> </ItemDate>
      <Item name = {response[0].ItmeName}>This is first item</Item>

      <ItemDate  day = {response[1].ItemDate} month = {response[1].ItmeMonth} year = {response[1].ItmeYear}></ItemDate>
      <Item name = {response[1].ItmeName}></Item>

      <ItemDate  day = {response[2].ItemDate} month = {response[2].ItmeMonth} year = {response[2].ItmeYear}></ItemDate>
      <Item name = {response[2].ItmeName}></Item>

      <div className="App">Hello Jee</div>

      </Card>
    </div>
  );
}

export default App;
