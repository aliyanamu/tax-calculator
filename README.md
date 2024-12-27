# tax-calculator
Calculates the Personal Income Tax in Indonesia based on the taxpayer’s annual income. This program takes monthly income as the input.

### Getting Started
Run the command-line below with your **monthly** salary in IDR

> node index.js <monthly_salary>

If there is no salary input from command line, it will take default number (25.000.000)

### The Taxation scheme
According to Indonesia’s Government rule about income taxation, personal income tax follows the below scheme:

- Annual income from 0 to 50.000.000 IDR - tax rate is 5%
- Annual income from 50.000.000 to 250.000.000 IDR - tax rate is 15%
- Annual income from 250.000.000 to 500.000.000 IDR - tax rate is 25%
- Annual income above 500.000.000 IDR - tax rate is 30%

Example: If a person monthly salary is 25.000.000, then the calculation will be :
Annual taxable income = 25.000.000 * 12 = 300.000.000
Annual Tax on this Income = (50.000.000 * 5%) + (250.000.000 * 15%) = 40.000.000

Note: There's no non-taxable income stated above, assumed to simplify the calculation. For more information, visit 
https://pajak.go.id/en/income-tax-calculation-mechanism-individual