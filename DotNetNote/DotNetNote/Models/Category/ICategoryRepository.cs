using System.Collections.Generic;

namespace DotNetNoteCom.Models
{
    public interface ICategoryRepository
    {
        List<Category> GetCategories();
    }
}
