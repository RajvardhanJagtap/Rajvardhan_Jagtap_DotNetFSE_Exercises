namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Represents a PDF document that can be opened by the application.
/// </summary>
public class PdfDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening PDF Document");
    }
}
