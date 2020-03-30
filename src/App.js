import React from 'react';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <main className='flexbox'>
        <Board id='boad-1' className='board'>
          <Card id='Card-1' className='card' draggable='true'>
            <p>ITEM 1</p>
          </Card>
          <Card id='Card-2' className='card' draggable='true'>
            <p>ITEM 2</p>
          </Card>
        </Board>
        <Board id='boad-2' className='board'>
          <Card id='Card-3' className='card' draggable='true'>
            <p>ITEM 3</p>
          </Card>
        </Board>
        <Board id='boad-3' className='board'>
          <Card id='Card-4' className='card' draggable='true'>
            <p>ITEM 4</p>
          </Card>
        </Board>
        <Board id='boad-4' className='board'>
          <Card id='Card-5' className='card' draggable='true'>
            <p>ITEM 5</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
