export function formatCreationDate(dateString){
    //create a new Date object, dateString is expected in this format 'yyyy-mm-dd'
    const date = new Date(dateString);

    // get the day, month and year 
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; // months are zero-indexed (0-11)
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}