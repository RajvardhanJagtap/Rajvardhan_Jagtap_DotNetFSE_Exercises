using NUnit.Framework;
using Assert = NUnit.Framework.Legacy.ClassicAssert;

namespace NUnitMoqHandsOn;

/*
    Unit Testing verifies a small piece of code in isolation.
    TestFixture marks this class as a container for NUnit test cases.
    Test marks a method that NUnit should execute as a test.
    Assert checks whether the actual result matches the expected result.
*/
[TestFixture]
public class CalculatorTests
{
    private Calculator calculator = null!;

    [SetUp]
    public void SetUp()
    {
        calculator = new Calculator();
    }

    [Test]
    public void Add_WhenCalledWithFiveAndThree_ReturnsEight()
    {
        int result = calculator.Add(5, 3);

        Assert.AreEqual(8, result);
    }

    [Test]
    public void Subtract_WhenCalledWithTenAndFour_ReturnsSix()
    {
        int result = calculator.Subtract(10, 4);

        Assert.AreEqual(6, result);
    }
}
