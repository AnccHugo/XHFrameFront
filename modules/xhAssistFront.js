/**
 * @class CUtil
 * @description 全局变量类
*/

class CUtil {

    constructor() { }



    // [对象检查 - 是否为空]
    static ObjectIsEmpty(obj) {
        for (let key in obj) {
            return false;
        }

        return true;
    }

    // [对象查找 - 根据属性名:键值]
    static ObjectFindAttr(obj, attrname, attrValue) {
        try {
            let ele = {};

            for (let key in obj) {
                if (obj[key][attrName] == attrValue) {
                    ele = obj[key];
                    break;
                }
            }

            return ele;
        } catch (e) {
            return false;
        }
    }


    // [生成1个指定范围的随机数]
    static RandomIntNum(minNum, maxNum) {
        try {
            switch (arguments.length) {
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                default:
                    return parseInt(Math.random() * minNum + 1, 10);
            }
        } catch (e) {
            return 0;
        }
    }







}

export default CUtil;



/**
 * @name CDate
 * @description 操作日期的类
 * @author XiaoHe
*/

class CDate {

    constructor() { }



    // [格式化日期]
    static FormatDate(strDate) {
        try {
            return new Date(strDate);
        } catch (e) {
            return false;
        }

    }

    // [获取年份]
    static GetFullYear(strDate) {
        try {
            strDate = this.FormatDate(strDate);

            return new Date(strDate).getFullYear();
        } catch (e) {
            return '0000';
        }
    }

    // [获取月份]
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

    // [获取日期]
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

    // [获取时数]
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

    // [后去分数]
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

    // [获取秒数]
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

    // [获取 年-月-日]
    static GetFullDate(strDate) {
        strDate = strDate ? strDate : new Date();
        return this.GetFullYear(strDate) + '-' + this.GetMonth(strDate) + '-' + this.GetDay(strDate);
    }

    // [获取 时:分:秒]
    static GetFullTime(strDate) {
        strDate = strDate ? strDate : new Date();
        return this.GetHour(strDate) + ':' + this.GetMinute(strDate) + ':' + this.GetSecond(strDate);
    }

    // [获取 年-月-日 时:分:秒]
    static GetFullDateTime(strDate) {
        return this.GetFullDate() + ' ' + this.GetFullTime();
    }



    // [设置年份]
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

    // [设置月份]
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

    // [设置天数日期]
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

    // [设置时数]
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

    // [设置分数]
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

    // [设置秒数]
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









