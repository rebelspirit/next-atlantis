import moment from 'moment';
import 'moment/locale/ru';


export class DateUse {

    static getCurrentLocalDateTime(format) {
        return moment().format(this.#isNewFormatExist(format));
    }

    static getCurrentUTCDateTime(format) {
        return moment.utc().format(this.#isNewFormatExist(format));
    }

    static getCurrentDate() {
        return moment().format('YYYY/MM/DD');
    }

    static getTomorrowDate() {
        return moment().add(1, 'days').format('YYYY/MM/DD');
    }

    static getYesterdayDate() {
        return moment().subtract(1, 'days').format('YYYY/MM/DD');
    }

    static getCurrentWeek() {
        return {
            weekStart: moment().clone().startOf('isoWeek').format('YYYY/MM/DD'),
            weekEnd: moment().clone().endOf('isoWeek').format('YYYY/MM/DD')
        }
    }
    static getNextWeek() {
        return {
            nextWeekStart: moment().add(1, 'weeks').clone().startOf('isoWeek').format('YYYY/MM/DD'),
            nextWeekEnd: moment().add(1, 'weeks').clone().endOf('isoWeek').format('YYYY/MM/DD')
        }
    }

    static getLastWeek() {
        return {
            lastWeekStart: moment().subtract(1, 'weeks').clone().startOf('isoWeek').format('YYYY/MM/DD'),
            lastWeekEnd: moment().subtract(1, 'weeks').clone().endOf('isoWeek').format('YYYY/MM/DD')
        }
    }
    static getCurrentMonth() {
        return {
            monthStart: moment().clone().startOf('month').format('YYYY/MM/DD'),
            monthEnd: moment().clone().endOf('month').format('YYYY/MM/DD')
        }
    }
    static getLastMonth() {
        return {
            lastMonthStart: moment().subtract(1, 'months').clone().startOf('month').format('YYYY/MM/DD'),
            lastMonthEnd: moment().subtract(1, 'months').clone().endOf('month').format('YYYY/MM/DD')
        }
    }
    static isBetween(date, startDate, endDate) {
        return moment(date, 'YYYY/MM/DD').isBetween(moment(startDate, 'YYYY/MM/DD'), moment(endDate, 'YYYY/MM/DD'), 'days', '[]')
    }

    static isCurrentDate(date) {
        return moment(date, 'YYYY/MM/DD').isSame(moment(this.getCurrentDate(), 'YYYY/MM/DD'), 'day');
    }

    static isTomorrowDate(date) {
        return moment(date, 'YYYY/MM/DD').isSame(moment(this.getTomorrowDate(), 'YYYY/MM/DD'), 'day');
    }

    static isYesterdayDate(date) {
        return moment(date, 'YYYY/MM/DD').isSame(moment(this.getYesterdayDate(), 'YYYY/MM/DD'), 'day');
    }

    static isSameOrBefore(date) {
        return moment().isSameOrBefore(moment(date, 'YYYY/MM/DD'));
    }

    static isDateExpired(date) {
        return moment().isAfter(moment(date, 'YYYY/MM/DD'));
    }

    static convertLocalToUTC(dateTime, format, newFormat) {
        return moment(dateTime, format).utc().format(this.#isNewFormatExist(newFormat));
    }

    static convertUTCToLocal(utcDateTime, utcDateTimeFormat, localDateTimeFormat) {
        const toLocalDateTime = moment.utc(utcDateTime, utcDateTimeFormat).toDate();

        return moment(toLocalDateTime).format(this.#isNewFormatExist(localDateTimeFormat));
    }

    static format(date, fromFormat, toFormat) {
        return moment(date, fromFormat).format(this.#isNewFormatExist(toFormat));
    }

    static getDurationTime(settings = {}) {
        const start = moment(settings.start.value, settings.start.format);
        const end = moment(settings.end.value, settings.end.format);

        return moment.duration(end.diff(start));
    }

    static #isNewFormatExist(newFormat) {
        return newFormat ? newFormat : 'YYYY/MM/DD HH:mm:ss';
    }
}
