namespace FinancialForecasting;

public class ForecastCalculator
{
    // Recursion solves a problem by calling the same method with a smaller input.
    // Base Case: when years == 0, stop recursing and return the current value.
    // Recursive Case: apply one year of growth and call the method again for years - 1.
    // Time Complexity: O(years) because the method makes one recursive call per year.
    public double Forecast(double currentValue, double growthRate, int years)
    {
        if (years == 0)
        {
            return currentValue;
        }

        return Forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }
}
