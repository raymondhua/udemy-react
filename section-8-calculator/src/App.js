import React, {useState} from 'react';

import Header from './components/Header/Header';
import Result from './components/Result/Table';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const resetCalculatedInfoHandler = () =>{
    setCalculatedData([]);
  }
  const submitCalculatedInfoHandler = (enteredData) =>{
    setCalculatedData(enteredData);
  }

  return (
    <div>
      <Header />
      <UserInput onSubmitUserInput={submitCalculatedInfoHandler} onResetUserInput={resetCalculatedInfoHandler} />
      <Result items={calculatedData}/>
    </div>
  );
}

export default App;
