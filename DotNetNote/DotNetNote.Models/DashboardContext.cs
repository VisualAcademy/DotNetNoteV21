using DotNetNote.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetNote
{
    public class DashboardContext : DbContext
    {
        public DbSet<Twelve> Twelves { get; set; }

        /// <summary>
        /// 생성자 매개변수에 옵션값 전달
        /// </summary>
        public DashboardContext(DbContextOptions<DashboardContext> options)
            : base(options)
        {

        }
    }
}
