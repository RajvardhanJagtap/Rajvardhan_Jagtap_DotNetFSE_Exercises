namespace DesignPatterns.FactoryMethod;

/// <summary>
/// Declares the factory method used to create document instances.
/// </summary>
public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
}
