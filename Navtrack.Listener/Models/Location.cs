using System;

namespace Navtrack.Listener.Models
{
    public class Location
    {
        public Device Device { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public DateTime DateTime { get; set; }
        public bool PositionStatus { get; set; }
        public double Speed { get; set; }
        public float? Heading { get; set; }
        public double? Altitude { get; set; }
        public short Satellites { get; set; }
        public double HDOP { get; set; }
        public short? GsmSignal { get; set; }
        public double? Odometer { get; set; }
    }
}