namespace NUnitMoqHandsOn;

public class CustomerService
{
    private readonly ICustomerRepository customerRepository;

    public CustomerService(ICustomerRepository customerRepository)
    {
        this.customerRepository = customerRepository ?? throw new ArgumentNullException(nameof(customerRepository));
    }

    public string GetCustomer(int id)
    {
        return customerRepository.GetCustomerName(id);
    }
}
