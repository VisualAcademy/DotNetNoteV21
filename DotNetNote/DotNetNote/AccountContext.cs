using DotNetNoteCom.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetNoteCom
{
    public class AccountContext : DbContext
    {
        public AccountContext(DbContextOptions<AccountContext> options) : base(options)
        {

        }

        public DbSet<SignBase> SignBases { get; set; }
    }
}
