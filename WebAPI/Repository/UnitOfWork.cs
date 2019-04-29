using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Core;

namespace WebAPI.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDBContext context;

        public UnitOfWork(ApplicationDBContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
