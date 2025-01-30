import { useState } from 'react';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const calculateEMI = (amount, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emi = calculateEMI(
      parseFloat(loanAmount),
      parseFloat(interestRate),
      parseInt(loanTenure, 10)
    );
    setMonthlyPayment(emi);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Loan Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan amount"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Interest Rate (% per annum):</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter interest rate"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Loan Tenure (months):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan tenure in months"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Calculate EMI
        </button>
      </form>
      {monthlyPayment && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Loan Details:
          </h3>
          <p className="text-sm text-gray-500">
            Loan Amount: {formatCurrency(loanAmount)}
          </p>
          <p className="text-2xl font-bold text-green-500 mt-2">
            Estimated Monthly Payment: {formatCurrency(monthlyPayment)}
          </p>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
