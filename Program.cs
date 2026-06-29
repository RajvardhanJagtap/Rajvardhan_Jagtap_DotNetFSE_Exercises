using EFCoreRetailStore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = Host.CreateApplicationBuilder(args);

builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

builder.Services.AddDbContext<RetailDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RetailStoreConnection")));

using var host = builder.Build();

try
{
    var dbContext = host.Services.GetRequiredService<RetailDbContext>();

    Console.WriteLine("Applying EF Core migrations...");
    dbContext.Database.Migrate();

    Console.WriteLine("Seeding initial product data...");
    if (!dbContext.Products.Any())
    {
        dbContext.Products.AddRange(
            new Product { ProductId = 1, ProductName = "Laptop", Category = "Electronics", Price = 50000m, Quantity = 10 },
            new Product { ProductId = 2, ProductName = "Mobile", Category = "Electronics", Price = 25000m, Quantity = 20 },
            new Product { ProductId = 3, ProductName = "Tablet", Category = "Electronics", Price = 30000m, Quantity = 15 },
            new Product { ProductId = 4, ProductName = "Keyboard", Category = "Accessories", Price = 1200m, Quantity = 50 },
            new Product { ProductId = 5, ProductName = "Mouse", Category = "Accessories", Price = 800m, Quantity = 60 });
        dbContext.SaveChanges();
    }

    Console.WriteLine("\nRetail Inventory Products:\n");
    var products = dbContext.Products.AsNoTracking().OrderBy(p => p.ProductId).ToList();

    foreach (var product in products)
    {
        Console.WriteLine($"## ID : {product.ProductId}");
        Console.WriteLine($"Name : {product.ProductName}");
        Console.WriteLine($"Category : {product.Category}");
        Console.WriteLine($"Price : {product.Price}");
        Console.WriteLine($"Quantity : {product.Quantity}");
        Console.WriteLine();
    }
}
catch (Exception ex)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
    Console.WriteLine(ex.StackTrace);
}
