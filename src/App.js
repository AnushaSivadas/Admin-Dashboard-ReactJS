import './App.css';
import Navbar from './components/Navbar/Navbar';
import BarChart from './components/barChart/BarChart';
import Cards from './components/cards/Cards';
import DonutChart from './components/donutChart/DonutChart';
import Sidebar from './components/sidebar/Sidebar';
import CustomTable from './components/table/Table';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='dashboard-body'>
        <Navbar />
        <Cards />
        <div className='charts'>
          <BarChart />
          <DonutChart />
        </div>
        <CustomTable/>
      </div>
    </div>
  );
}

export default App;
