import './App.css';
import Payment from './components/Payment';
import PaymentTabs from './components/PaymentTabs';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 bg-gray-100 p-8 md:px-52 h-full">
      <div className="col-span-1 md:col-span-7">
        <PaymentTabs />
      </div>
      <div className="col-span-1 md:col-span-3">
        <Payment />
      </div>
    </div>
  );
}

export default App;
