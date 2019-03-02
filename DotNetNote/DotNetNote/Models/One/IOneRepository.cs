using System.Collections.Generic;

namespace AngularNote.Models
{
    public interface IOneRepository
    {
        One Add(One model);
        List<One> GetAll();
    }
}
