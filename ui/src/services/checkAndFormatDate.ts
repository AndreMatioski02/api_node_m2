export const checkAndFormatDate = (date: string) => {
    if(date.includes("-")) {
        const year = date.split("-")[0];
        const month = date.split("-")[1];
        const day = date.split("-")[2];
        return `${day}/${month}/${year}`;
    }else {
        return date;
    }
}