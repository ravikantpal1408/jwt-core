using System;
using System.Threading.Tasks;

namespace WebAPI.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}