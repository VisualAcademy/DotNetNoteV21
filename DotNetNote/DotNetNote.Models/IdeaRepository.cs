using Dapper;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace DotNetNote.Models
{
    /// <summary>
    /// [4] 리포지토리 클래스
    /// </summary>
    public class IdeaRepository : IIdeaRepository
    {
        private IConfiguration _config;
        private IDbConnection db;

        public IdeaRepository(IConfiguration config)
        {
            _config = config;

            db = new SqlConnection(_config.GetSection("ConnectionString").Value);
        }

        public List<Idea> GetAll()
        {
            //TODO: 데이터 캐싱과 페이징 등을 적용할 것
            string sql = "Select * From Ideas";
            return db.Query<Idea>(sql).ToList();
        }

        public Idea Add(Idea model)
        {
            var sql =
                "Insert Into Ideas (Note) Values (@Note); " +
                "Select Cast(SCOPE_IDENTITY() As Int);";

            var id = db.Query<int>(sql, model).Single();

            model.Id = id;
            return model;
        }
    }
}
