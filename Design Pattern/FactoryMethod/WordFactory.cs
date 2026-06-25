namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Creates Word documents through the factory method pattern.
/// </summary>
public class WordFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new WordDocument();
    }
}
