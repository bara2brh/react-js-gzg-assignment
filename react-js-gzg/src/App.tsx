
import Button from './components/Button.tsx';
import Alert from './components/Alert.tsx';
import ListGroup from './components/ListGroup.tsx';
import { useState } from 'react';

function App() {

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
]
  const handleSelectedItem = (item:String)=>{console.log(item)}
  const [alertVisable,  setAlertVisable] = useState(false);

  return (
    <>
    
    <Button
    onClick={()=>setAlertVisable(true)}
    color={'danger'}
    children={"show alert"}
    />
      { alertVisable && <Alert onClose={()=>setAlertVisable(false)}> 
        <h1>this is alert</h1>
        
      </Alert>}
      
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} />
    </>
  )
}

export default App
