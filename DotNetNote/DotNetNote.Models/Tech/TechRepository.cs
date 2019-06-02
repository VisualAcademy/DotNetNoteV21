using Dapper;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace DotNetNote.Models
{
    public class TechRepository : ITechRepository
    {
        private IConfiguration _config;
        private SqlConnection db;

        public TechRepository(IConfiguration config)
        {
            _config = config;

            // IConfiguration 개체를 통해서 
            // appsettings.json의 데이터베이스 연결 문자열을 읽어온다. 
            db = new SqlConnection(
                _config.GetSection("ConnectionStrings").GetSection(
                    "DefaultConnection").Value);
        }

        // 입력
        public void AddTech(Tech model)
        {
            string sql = "Insert Into Teches (Title) Values (@Title)";
            var id = this.db.Execute(sql, model);
        }

        // 출력
        public List<Tech> GetTechs()
        {
            string sql = "Select Id, Title From Teches Order By Id Asc";
            return this.db.Query<Tech>(sql).ToList();
        }
    }

    public class TechRepositoryEf : ITechRepository
    {
        private readonly TechContext _context;

        public TechRepositoryEf()
        {
            _context = new TechContext();
        }

        public TechRepositoryEf(TechContext context)
        {
            _context = context;
        }

        public void AddTech(Tech model)
        {
            _context.Teches.Add(model);
            _context.SaveChanges();
        }

        public List<Tech> GetTechs()
        {
            return _context.Teches.OrderBy(t => t.Id).ToList();
        }
    }
}
