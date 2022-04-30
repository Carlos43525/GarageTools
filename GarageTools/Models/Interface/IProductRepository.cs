using System.Collections.Generic;

namespace GarageTools.Models.Interface
{
    public interface IProductRepository
    {
        IEnumerable<Product> Products { get; }
        Product GetProductById(int Id);
    }
}
