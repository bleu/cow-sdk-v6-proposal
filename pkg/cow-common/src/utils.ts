export function timestamp(time: number | Date): number {
  return time instanceof Date ? Math.floor(time.getTime() / 1000) : time
}
