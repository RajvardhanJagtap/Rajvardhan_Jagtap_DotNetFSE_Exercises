using Microsoft.AspNetCore.Mvc;
using RetailStoreWebAPI.Models;

namespace RetailStoreWebAPI.Controllers
{
    /// <summary>
    /// Handles CRUD operations for products.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new()
        {
            new Product { ProductId = 1, ProductName = "Laptop", Category = "Electronics", Price = 799.99m, Quantity = 10 },
            new Product { ProductId = 2, ProductName = "Mouse", Category = "Accessories", Price = 24.50m, Quantity = 25 },
            new Product { ProductId = 3, ProductName = "Keyboard", Category = "Accessories", Price = 49.99m, Quantity = 15 }
        };

        // GET: api/products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(Products);
        }

        // GET: api/products/1
        [HttpGet("{id:int}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = Products.FirstOrDefault(p => p.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // POST: api/products
        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            product.ProductId = Products.Max(p => p.ProductId) + 1;
            Products.Add(product);

            return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
        }

        // PUT: api/products/1
        [HttpPut("{id:int}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            var existingProduct = Products.FirstOrDefault(p => p.ProductId == id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            existingProduct.ProductName = product.ProductName;
            existingProduct.Category = product.Category;
            existingProduct.Price = product.Price;
            existingProduct.Quantity = product.Quantity;

            return NoContent();
        }

        // DELETE: api/products/1
        [HttpDelete("{id:int}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = Products.FirstOrDefault(p => p.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

            Products.Remove(product);
            return NoContent();
        }
    }
}
