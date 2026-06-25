namespace DesignPatterns.Singleton;

/// <summary>
/// Demonstrates the singleton pattern by reusing the same logger instance.
/// </summary>
internal static class Program
{
    private static void Main()
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        logger1.Log("Application Started");
        logger2.Log("User Logged In");

        Console.WriteLine(Object.ReferenceEquals(logger1, logger2));
    }
}
