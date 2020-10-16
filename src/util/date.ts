interface IInterval {
    initial_date: string;
    final_date: string;
}

export const initInterval = () : IInterval => {
    const date = new Date();

    const start = new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString();

    return { initial_date: start, final_date: end };
};