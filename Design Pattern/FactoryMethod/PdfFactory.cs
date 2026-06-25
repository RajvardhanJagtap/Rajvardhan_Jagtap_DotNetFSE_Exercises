namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Creates PDF documents through the factory method pattern.
/// </summary>
public class PdfFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new PdfDocument();
    }
}
