using Moq;
using NUnit.Framework;
using Assert = NUnit.Framework.Legacy.ClassicAssert;

namespace NUnitMoqHandsOn;

[TestFixture]
public class CustomerServiceTests
{
    private Mock<ICustomerRepository> customerRepositoryMock = null!;
    private CustomerService customerService = null!;

    [SetUp]
    public void SetUp()
    {
        customerRepositoryMock = new Mock<ICustomerRepository>();
        customerService = new CustomerService(customerRepositoryMock.Object);
    }

    [Test]
    public void GetCustomer_WhenIdIsOne_ReturnsRaj()
    {
        customerRepositoryMock
            .Setup(repository => repository.GetCustomerName(1))
            .Returns("Raj");

        string customerName = customerService.GetCustomer(1);

        Assert.AreEqual("Raj", customerName);
    }

    [Test]
    public void GetCustomer_WhenIdIsTwo_ReturnsAmit()
    {
        customerRepositoryMock
            .Setup(repository => repository.GetCustomerName(2))
            .Returns("Amit");

        string customerName = customerService.GetCustomer(2);

        Assert.AreEqual("Amit", customerName);
    }
}
