using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Core;
using WebAPI.Models;


namespace WebAPI.Repository 
{    
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public CustomerRepository(ApplicationDBContext _dbContext)
        {
            this._dbContext=_dbContext;            
        }

        

    }
}