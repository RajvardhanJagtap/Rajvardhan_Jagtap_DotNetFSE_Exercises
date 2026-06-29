using EFCoreRetailStore;
using Microsoft.EntityFrameworkCore;

namespace EFCoreRetailStore.Data
{
    /// <summary>
    /// Database context for the retail inventory application.
    /// </summary>
    public class RetailDbContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RetailDbContext"/> class.
        /// </summary>
        /// <param name="options">The EF Core options for this context.</param>
        public RetailDbContext(DbContextOptions<RetailDbContext> options)
            : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the products table.
        /// </summary>
        public DbSet<Product> Products => Set<Product>();

        /// <summary>
        /// Configures the model and seeds initial data.
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(p => p.ProductId);
                entity.Property(p => p.ProductName).IsRequired().HasMaxLength(100);
                entity.Property(p => p.Category).IsRequired().HasMaxLength(50);
                entity.Property(p => p.Price).HasColumnType("decimal(18,2)");
            });

            modelBuilder.Entity<Product>().HasData(
                new Product { ProductId = 1, ProductName = "Laptop", Category = "Electronics", Price = 50000m, Quantity = 10 },
                new Product { ProductId = 2, ProductName = "Mobile", Category = "Electronics", Price = 25000m, Quantity = 20 },
                new Product { ProductId = 3, ProductName = "Tablet", Category = "Electronics", Price = 30000m, Quantity = 15 },
                new Product { ProductId = 4, ProductName = "Keyboard", Category = "Accessories", Price = 1200m, Quantity = 50 },
                new Product { ProductId = 5, ProductName = "Mouse", Category = "Accessories", Price = 800m, Quantity = 60 });
        }
    }
}
