// import path


/**
 * @class CUtil
 * @description 全局变量类
*/
class CUtil {
    constructor() { }



}

export default CUtil;


/**
 * @name CDate
 * @description 操作日期的类
 * @author XiaoHe
*/

class CDate {
    constructor() { }


    // 获取日期
    static FormatDate(strDate) {
        try {
            return new Date(strDate);
        } catch (e) {
            return false;
        }

    }

    static GetFullYear(strDate) {
        try {
            strDate = this.FormatDate(strDate);

            return new Date(strDate).getFullYear();
        } catch (e) {
            return '0000';
        }
    }

    static GetMonth(strDate) {
        try {
            strDate = this.FormatDate(strDate);
            let month = new Date(strDate).getMonth() + 1;
            month = month < 10 ? '0' + month : month;

            return month;
        } catch (e) {
            return '00';
        }
    }

    static GetDay(strDate) {
        try {
            strDate = this.FormatDate(strDate);
            let day = new Date(strDate).getDate();
            day = day < 10 ? '0' + day : day;

            return day;
        } catch (e) {
            return '00';
        }
    }

    static GetHour(strDate) {
        try {
            strDate = this.FormatDate(strDate);
            let hour = new Date(strDate).getHours();
            hour = hour < 10 ? '0' + hour : hour;

            return hour;
        } catch (e) {
            return '00';
        }
    }

    static GetMinute(strDate) {
        try {
            strDate = this.FormatDate(strDate);
            let minute = new Date(strDate).getMinutes();
            minute = minute < 10 ? '0' + minute : minute;

            return minute;
        } catch (e) {
            return '00';
        }
    }

    static GetSecond(strDate) {
        try {
            strDate = this.FormatDate(strDate);
            let second = new Date(strDate).getSeconds();
            second = second < 10 ? '0' + second : second;

            return second;
        } catch (e) {
            return '00';
        }
    }

    static GetFullDate(strDate) {
        strDate = strDate ? strDate : new Date();
        return this.GetFullYear(strDate) + '-' + this.GetMonth(strDate) + '-' + this.GetDay(strDate);
    }

    static GetFullTime(strDate) {
        strDate = strDate ? strDate : new Date();
        return this.GetHour(strDate) + ':' + this.GetMinute(strDate) + ':' + this.GetSecond(strDate);
    }

    static GetFullDateTime(strDate) {
        return this.GetFullDate() + ' ' + this.GetFullTime();
    }



    // 设置日期
    static SetYear(strDate, posYear) {
        try {
            strDate = this.FormatDate(strDate);
            let curYear = this.GetMonth(strDate) + posYear;
            let curDate = new Date(strDate).setFullYear(curYear);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }

    static SetMonth(strDate, posMonth) {
        try {
            strDate = this.FormatDate(strDate);
            let curMonth = this.GetMonth(strDate) + posMonth;
            let curDate = new Date(strDate).setMonth(curMonth);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }

    static SetDay(strDate, posDay) {
        try {
            strDate = this.FormatDate(strDate);
            let curDay = this.GetMonth(strDate) + posDay;
            let curDate = new Date(strDate).setDate(curDay);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }

    static SetHour(strDate, posHour) {
        try {
            strDate = this.FormatDate(strDate);
            let curHour = this.GetHour(strDate) + posHour;
            let curDate = new Date(strDate).setHours(curHour);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }

    static SetMinute(strDate, posMinute) {
        try {
            strDate = this.FormatDate(strDate);
            let curMinute = this.GetMinute(strDate) + posMinute;
            let curDate = new Date(strDate).setMinutes(curMinute);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }

    static SetSecond(strDate, posSecond) {
        try {
            strDate = this.FormatDate(strDate);
            let curSecond = this.GetHour(strDate) + posSecond;
            let curDate = new Date(strDate).setSeconds(curSecond);

            return curDate;
        } catch (e) {
            return '0000-00-00 00:00:00';
        }
    }



}

export { CDate };









