namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Demonstrates the factory method pattern by creating document objects through factories.
/// </summary>
internal static class Program
{
    private static void Main()
    {
        DocumentFactory wordFactory = new WordFactory();
        IDocument wordDocument = wordFactory.CreateDocument();
        wordDocument.Open();

        DocumentFactory pdfFactory = new PdfFactory();
        IDocument pdfDocument = pdfFactory.CreateDocument();
        pdfDocument.Open();
    }
}
