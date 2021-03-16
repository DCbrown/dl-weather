export class Forecast {
    constructor(public date: Date,
                public iconData: String,
                public temp: String) {
                    this.date = date;
                    this.iconData = iconData;
                    this.temp = temp;
                }
}
