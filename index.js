const TAX_LAYERS = [
    { limit: 50000000, rate: 5 / 100 },
    { limit: 250000000, rate: 15 / 100 },
    { limit: 500000000, rate: 25 / 100 },
    { limit: Infinity, rate: 30 / 100 },
];

const rupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

const calculateAnnualTax = (annualTaxableIncome) => {
    let remainingIncome = annualTaxableIncome;
    let totalTax = 0;

    for (const { limit, rate } of TAX_LAYERS) {
        const taxableAmount = Math.min(remainingIncome, limit);
        totalTax += taxableAmount * rate;
        remainingIncome -= taxableAmount;

        if (remainingIncome <= 0) break;
    }

    return totalTax;
};

const calculateTax = (monthlySalary) => {
    // Parse and validate monthly salary
    const parsedSalary = parseFloat(monthlySalary.replaceAll('.', '').replace(',', '.'));
    if (isNaN(parsedSalary) || parsedSalary <= 0) {
        console.log('Invalid monthly salary input.');
        return;
    }

    // Convert it until 2 number behind comma
    const monthlySalaryFixed = parsedSalary.toFixed(2);
    const annualTaxableIncome = monthlySalaryFixed * 12;

    console.log(`The monthly salary is ${rupiah(monthlySalaryFixed)}`);
    console.log(`The annual taxable income is ${rupiah(annualTaxableIncome)}`);
    
    const annualTax = calculateAnnualTax(annualTaxableIncome);
    console.log(`The total tax payable is ${rupiah(annualTax)}`);
}

// Change `defaultMonthlySalary` to test the function
const defaultMonthlySalary = '25.000.000';
const monthlySalary = process.argv[2] || defaultMonthlySalary;
calculateTax(monthlySalary);
