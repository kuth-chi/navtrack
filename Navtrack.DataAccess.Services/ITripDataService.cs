using System.Collections.Generic;
using System.Threading.Tasks;
using Navtrack.DataAccess.Model.Custom;

namespace Navtrack.DataAccess.Services
{
    public interface ITripDataService
    {
        Task UpdateTrips(int assetId);

        // Task<int> GetMedianTimeSpanBetweenLocations(int assetId);
        // Task<List<TripWithLocations>> GetTrips(int assetId);
        // Task UpdateTrips(int assetId);
        Task<List<TripWithLocations>> GetTrips(int assetId);
    }
}