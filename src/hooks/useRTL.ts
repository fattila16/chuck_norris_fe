export enum Direction {
    RTL = 'rtl',
    LTR = 'ltr',
}
const useRTL = (): any => {
    let direction = Direction.LTR;
    if (typeof document !== 'undefined') direction = document.body.dir as Direction;
    const setDirection = (dir: Direction) => {
        if (document) document.body.dir = dir;
    };
    return { direction, setDirection };
};
export default useRTL;
