// System.Data.SqlClient.dll
// Microsoft.EntityFrameworkCore.SqlServer.dll
// System.Configuration.ConfigurationManager.dll 
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace DotNetNote.Models
{
    public class DotNetNoteContext : DbContext
    {
        public DotNetNoteContext()
        {
            // Empty
        }

        public DotNetNoteContext(DbContextOptions<DotNetNoteContext> options)
            : base(options)
        {
            // 공식과 같은 코드 
        }

        protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionString = ConfigurationManager.ConnectionStrings[
                    "ConnectionString"].ConnectionString;
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        /// <summary>
        /// 아이디어 관리자
        /// </summary>
        public DbSet<Idea> Ideas { get; set; }

        /// <summary>
        /// 게시판
        /// </summary>
        public DbSet<Note> Notes { get; set; }

        /// <summary>
        /// 도메인 관리자 테이블 참조
        /// </summary>
        public DbSet<Url> Urls { get; set; }
    }
}
