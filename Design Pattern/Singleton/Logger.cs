namespace DesignPatterns.Singleton;

/// <summary>
/// Represents a singleton logger that provides a single shared instance for the application.
/// </summary>
public class Logger
{
    private static Logger? instance;

    private Logger()
    {
        Console.WriteLine("Logger Instance Created");
    }

    public static Logger GetInstance()
    {
        instance ??= new Logger();
        return instance;
    }

    public void Log(string message)
    {
        Console.WriteLine($"LOG: {message}");
    }
}
