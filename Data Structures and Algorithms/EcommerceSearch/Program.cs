using System;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceSearch;

public class Program
{
    public static void Main()
    {
        // Linear Search checks each product one by one.
        // Time Complexity: O(n) because, in the worst case, every item may be compared.
        List<Product> products = new()
        {
            new Product { ProductId = 1, ProductName = "Laptop" },
            new Product { ProductId = 2, ProductName = "Mobile" },
            new Product { ProductId = 3, ProductName = "Tablet" },
            new Product { ProductId = 4, ProductName = "Smart Watch" },
            new Product { ProductId = 5, ProductName = "Headphones" }
        };

        string searchTerm = "Tablet";

        Product? linearResult = LinearSearch(products, searchTerm, out int linearComparisons);
        List<Product> sortedProducts = products.OrderBy(product => product.ProductName).ToList();
        Product? binaryResult = BinarySearch(sortedProducts, searchTerm, out int binaryComparisons);

        Console.WriteLine("Linear Search:");
        Console.WriteLine(linearResult is not null
            ? $"Product Found: {linearResult.ProductName}"
            : "Product Not Found");
        Console.WriteLine($"Comparisons: {linearComparisons}");
        Console.WriteLine();

        Console.WriteLine("Binary Search:");
        Console.WriteLine(binaryResult is not null
            ? $"Product Found: {binaryResult.ProductName}"
            : "Product Not Found");
        Console.WriteLine($"Comparisons: {binaryComparisons}");
        Console.WriteLine();

        Console.WriteLine("Conclusion:");
        Console.WriteLine("Binary Search is more efficient for sorted data.");
    }

    private static Product? LinearSearch(List<Product> products, string searchTerm, out int comparisons)
    {
        comparisons = 0;

        foreach (Product product in products)
        {
            comparisons++;
            if (string.Equals(product.ProductName, searchTerm, StringComparison.OrdinalIgnoreCase))
            {
                return product;
            }
        }

        return null;
    }

    // Binary Search works on sorted data by repeatedly dividing the search range in half.
    // Time Complexity: O(log n) because each comparison removes about half of the remaining items.
    private static Product? BinarySearch(List<Product> sortedProducts, string searchTerm, out int comparisons)
    {
        comparisons = 0;

        int left = 0;
        int right = sortedProducts.Count - 1;

        while (left <= right)
        {
            int middle = left + (right - left) / 2;
            comparisons++;

            int comparison = string.Compare(sortedProducts[middle].ProductName, searchTerm, StringComparison.OrdinalIgnoreCase);
            if (comparison == 0)
            {
                return sortedProducts[middle];
            }

            if (comparison < 0)
            {
                left = middle + 1;
            }
            else
            {
                right = middle - 1;
            }
        }

        return null;
    }
}
