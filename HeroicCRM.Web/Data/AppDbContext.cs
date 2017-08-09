using System.Data.Entity;
using HeroicCRM.Web.Core;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Common;
using System.Data.SqlClient;
using System;

namespace HeroicCRM.Web.Data
{
	public class AppDbContext : IdentityDbContext<User>
	{
        //public AppDbContext()
        //{
        //    //DbConnection connection = new SqlConnection(String.Format(@"Data Source=.\SQLEXPRESS; 
        //    //                    Integrated Security=SSPI; AttachDbFilename={0}; User Instance=True; 
        //    //                                Initial Catalog=IPDatabase;", Location));

        //}


        public IDbSet<Customer> Customers { get; set; }

		public IDbSet<Opportunity> Opportunities { get; set; }

		public IDbSet<Risk> Risks { get; set; }
	}
}