export function formatDate(date) {
    if(!date) return undefined;
    const format = new Date(date);
    let day = format.getDate()
    let month = format.getMonth();
    let year = format.getFullYear();

    let hour = format.getHours().toString();
    let min = format.getMinutes().toString();

    if (hour.length === 1) {
        hour = "0" + hour;
    }

    if(month === 0 ){
        month = "0" + 1
    }

    if (min.length === 1) {
        min = "0" + min;
    }

    return (month + "-" + day + "-" + year + " " + hour + ":" + min + " hs");
}