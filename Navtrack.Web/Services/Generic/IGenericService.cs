using System.Collections.Generic;
using System.Threading.Tasks;

namespace Navtrack.Web.Services.Generic
{
    public interface IGenericService<TEntity, TModel>
    {
        Task<TModel> Get(int id);
        Task<List<TModel>> GetAll();
        Task<ValidationResult> ValidateSave(TModel model);
        Task Add(TModel model);
        Task<bool> Exists(int id);
        Task Update(TModel model);
        Task<ValidationResult> ValidateDelete(int id);
        Task Delete(int id);
    }
}