using System.ComponentModel.DataAnnotations;

namespace EFCoreRetailStore
{
    /// <summary>
    /// Represents a retail product stored in the inventory database.
    /// </summary>
    public class Product
    {
        /// <summary>
        /// Gets or sets the unique identifier for the product.
        /// </summary>
        [Key]
        public int ProductId { get; set; }

        /// <summary>
        /// Gets or sets the product name.
        /// </summary>
        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Product name cannot exceed 100 characters.")]
        public string ProductName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the category assigned to the product.
        /// </summary>
        [Required(ErrorMessage = "Category is required.")]
        [StringLength(50, ErrorMessage = "Category cannot exceed 50 characters.")]
        public string Category { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the product price.
        /// </summary>
        [Required(ErrorMessage = "Price is required.")]
        [Range(0, double.MaxValue, ErrorMessage = "Price cannot be negative.")]
        public decimal Price { get; set; }

        /// <summary>
        /// Gets or sets the available quantity of the product.
        /// </summary>
        [Required(ErrorMessage = "Quantity is required.")]
        [Range(0, int.MaxValue, ErrorMessage = "Quantity cannot be negative.")]
        public int Quantity { get; set; }
    }
}
