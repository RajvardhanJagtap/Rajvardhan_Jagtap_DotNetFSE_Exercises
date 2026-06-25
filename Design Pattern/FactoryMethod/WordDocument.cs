namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Represents a Word document that can be opened by the application.
/// </summary>
public class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Word Document");
    }
}
