using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EFCoreRetailStore.Data
{
    /// <summary>
    /// Design-time factory used by EF Core CLI to create the database context.
    /// </summary>
    public class RetailDbContextFactory : IDesignTimeDbContextFactory<RetailDbContext>
    {
        public RetailDbContext CreateDbContext(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: false)
                .Build();

            var connectionString = configuration.GetConnectionString("RetailStoreConnection");

            var optionsBuilder = new DbContextOptionsBuilder<RetailDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new RetailDbContext(optionsBuilder.Options);
        }
    }
}
