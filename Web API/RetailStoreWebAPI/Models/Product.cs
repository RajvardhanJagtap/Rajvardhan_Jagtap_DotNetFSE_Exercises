namespace RetailStoreWebAPI.Models
{
    /// <summary>
    /// Represents a retail product in the store inventory.
    /// </summary>
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
