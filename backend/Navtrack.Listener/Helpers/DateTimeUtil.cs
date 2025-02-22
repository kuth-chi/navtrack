using System;
using System.Globalization;
using System.Text.RegularExpressions;

namespace Navtrack.Listener.Helpers;

public static class DateTimeUtil
{
    public static DateTime New(string year, string month, string day, string hour, string minute, string second,
        string millisecond = null, bool add2000Year = true)
    {
        DateTime dateTime = new(add2000Year ? System.Convert.ToInt32(year) + 2000 : System.Convert.ToInt32(year),
            System.Convert.ToInt32(month),
            System.Convert.ToInt32(day),
            System.Convert.ToInt32(hour),
            System.Convert.ToInt32(minute),
            System.Convert.ToInt32(second),
            string.IsNullOrEmpty(millisecond) ? 0 : System.Convert.ToInt32(millisecond));
        
        return DateTime.SpecifyKind(dateTime, DateTimeKind.Utc);
    }

    public static DateTime NewFromHex(string yearHex, string monthHex, string dayHex, string hourHex,
        string minuteHex, string secondHex,
        string millisecondHex = null, bool add2000Year = true)
    {
        int year = int.Parse(yearHex, NumberStyles.HexNumber);
        int month = int.Parse(monthHex, NumberStyles.HexNumber);
        int day = int.Parse(dayHex, NumberStyles.HexNumber);
        int hour = int.Parse(hourHex, NumberStyles.HexNumber);
        int minute = int.Parse(minuteHex, NumberStyles.HexNumber);
        int second = int.Parse(secondHex, NumberStyles.HexNumber);
        int millisecond = string.IsNullOrEmpty(millisecondHex)
            ? 0
            : int.Parse(millisecondHex, NumberStyles.HexNumber);

        DateTime dateTime = new(add2000Year ? year + 2000 : year, month, day, hour, minute, second, millisecond);

        return DateTime.SpecifyKind(dateTime, DateTimeKind.Utc);
    }

    public static DateTime Convert(DateFormat dateFormat, params string[] input)
    {
        return dateFormat switch
        {
            DateFormat.HHMMSS_SS_DDMMYY => Parse_HHMMSS_SS_DDMMYY(input),
            DateFormat.YYYYMMDDHHMMSS => Parse_YYYYMMDDHHMMSS(input),
            DateFormat.DDMMYYHHMMSS => Parse_DDMMYYHHMMSS(input),
            DateFormat.DDMMYY_HHMMSS => Parse_DDMMYY_HHMMSS(input),
            _ => Parse_YYMMDDHHMMSS(input)
        };
    }

    private static DateTime Parse_DDMMYY_HHMMSS(string[] input)
    {
        Match dateMatch = new Regex("(\\d+)\\/(\\d+)\\/(\\d+)").Match(input[0]); // dd/mm/yy
        Match timeMatch = new Regex("(\\d+):(\\d+):(\\d+)").Match(input[1]); // hh:mm:ss

        return New(
            dateMatch.Groups[3].Value,
            dateMatch.Groups[2].Value,
            dateMatch.Groups[1].Value,
            timeMatch.Groups[1].Value,
            timeMatch.Groups[2].Value,
            timeMatch.Groups[3].Value);
    }

    private static DateTime Parse_HHMMSS_SS_DDMMYY(string[] input)
    {
        Match timeMatch = new Regex("(\\d{2})(\\d{2})(\\d{2}).(\\d+)").Match(input[0]); // hh mm ss . sss
        Match dateMatch = new Regex("(\\d{2})(\\d{2})(\\d{2})").Match(input[1]); // dd mm yy

        return New(
            dateMatch.Groups[3].Value,
            dateMatch.Groups[2].Value,
            dateMatch.Groups[1].Value,
            timeMatch.Groups[1].Value,
            timeMatch.Groups[2].Value,
            timeMatch.Groups[3].Value,
            timeMatch.Groups[4].Value);
    }

    private static DateTime Parse_YYMMDDHHMMSS(string[] input)
    {
        Match match = new Regex("(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})").Match(input[0]);

        return New(
            match.Groups[1].Value,
            match.Groups[2].Value,
            match.Groups[3].Value,
            match.Groups[4].Value,
            match.Groups[5].Value,
            match.Groups[6].Value);
    }

    private static DateTime Parse_YYYYMMDDHHMMSS(string[] input)
    {
        Match match = new Regex("(\\d{4})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})").Match(input[0]);

        return New(
            match.Groups[1].Value,
            match.Groups[2].Value,
            match.Groups[3].Value,
            match.Groups[4].Value,
            match.Groups[5].Value,
            match.Groups[6].Value, add2000Year: false);
    }

    private static DateTime Parse_DDMMYYHHMMSS(string[] input)
    {
        Match match = new Regex("(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})").Match(input[0]);

        return New(
            match.Groups[3].Value,
            match.Groups[2].Value,
            match.Groups[1].Value,
            match.Groups[4].Value,
            match.Groups[5].Value,
            match.Groups[6].Value);
    }
}