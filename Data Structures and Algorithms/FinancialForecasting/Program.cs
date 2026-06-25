using System;

namespace FinancialForecasting;

public class Program
{
    public static void Main()
    {
        double currentRevenue = 10000;
        double growthRate = 0.10;
        int years = 5;

        ForecastCalculator calculator = new();
        double forecastedRevenue = calculator.Forecast(currentRevenue, growthRate, years);

        Console.WriteLine($"Current Revenue: {currentRevenue:0}");
        Console.WriteLine($"Growth Rate: {growthRate:P0}");
        Console.WriteLine();
        Console.WriteLine($"Forecasted Revenue after {years} years:");
        Console.WriteLine($"{forecastedRevenue:F2}");
    }
}
